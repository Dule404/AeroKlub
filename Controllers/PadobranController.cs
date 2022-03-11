using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PadobranController : ControllerBase
    {
        public AeroKlubContext Context { get; set; }
        public PadobranController(AeroKlubContext context)
        {
            Context = context;        
        }

        [Route("PrikaziPadobrane")]
        [HttpGet]
        public ActionResult Preuzmi()
        {
            return Ok(Context.Padobrani);
        }

        [Route("PrikaziPadobran/{id}")]
        [HttpGet]
        public ActionResult PreuzmiPadobran(int id)
        {
            var pad= Context.Padobrani.Where(p => p.ID==id).FirstOrDefault();
            var padobran = pad.Naziv+" "+pad.Povrsina;
            return Ok(padobran);
        }

        [Route("DodajPadobran/{naziv}/{tip}/{povrsina}")]
        [HttpPost]
        public async Task<ActionResult> DodajPadobran(string naziv, string tip, int povrsina)
        {
            if(string.IsNullOrWhiteSpace(naziv) || naziv.Length>50)
            {
                return BadRequest("Nevalidno ime!");
            }
            if(string.IsNullOrWhiteSpace(tip) || tip.Length>20)
            {
                return BadRequest("Nevalidan tip!");
            }
            if(povrsina<50 || povrsina>500)
            {
                return BadRequest("Nevalidna povrsina!");
            }
            try
            { var padobran=new Padobran
            {
                Naziv=naziv,
                Tip=tip,
                Povrsina=povrsina
            };
                Context.Padobrani.Add(padobran);
                await Context.SaveChangesAsync();
                return Ok("Padobran je dodat!");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PromeniPadobran/{id}/{naziv}/{tip}/{povrsina}")]
        [HttpPut]
        public async Task<ActionResult> PromeniPadobran(int id, string naziv, string tip, int povrsina)
        {
            if(id<=0)
            {
                return BadRequest("Pogresan ID!");
            }
            if(string.IsNullOrWhiteSpace(naziv) || naziv.Length>50)
            {
                return BadRequest("Nevalidno ime!");
            }
            if(string.IsNullOrWhiteSpace(tip) || tip.Length>20)
            {
                return BadRequest("Nevalidan tip!");
            }
            if(povrsina<50 || povrsina>500)
            {
                return BadRequest("Nevalidna povrsina!");
            }
            try
            {
               var padobran = Context.Padobrani.Where(p => p.ID == id).FirstOrDefault();
               if(padobran!=null)
               {
                   padobran.Naziv=naziv;
                   padobran.Tip=tip;
                   padobran.Povrsina=povrsina;

                   await Context.SaveChangesAsync();
                   return Ok("Padobran izmenjen!");
               }
               return BadRequest("Padobran sa zadatim ID-e nije pronadjen.");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    
        [Route("IzbrisiPadobran/{id}")]
            [HttpDelete]
            public async Task<ActionResult> IzbrisiPadobran(int id)
            {
                if(id<=0)
                {
                    return BadRequest("Pogresan ID!");
                }
                try
                {
                    var padobran = await Context.Padobrani.FindAsync(id);
                    string ime=padobran.Naziv;
                    Context.Padobrani.Remove(padobran);
                    await Context.SaveChangesAsync();
                    return Ok($"Padobran {ime} je uspesno uklonjen.");
                }
                catch(Exception e)
                {
                    return BadRequest(e.Message);
                }
            }
    }
}