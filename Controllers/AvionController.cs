using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AvionController : ControllerBase
    {
        public AeroKlubContext Context { get; set; }
        public AvionController(AeroKlubContext context)
        {
            Context = context;        
        }

        [EnableCors("CORS")]
        [Route("PrikaziAvione")]
        [HttpGet]
        public ActionResult Preuzmi()
        {
            return Ok(Context.Avioni);
        }

        [Route("PrikaziAvion/{id}")]
        [HttpGet]
        public ActionResult PreuzmiAvion(int id)
        {
            var avion= Context.Avioni.Where(p => p.ID==id).FirstOrDefault();
            return Ok(avion.Registracija);
        }

        [Route("DodajAvion/{naziv}/{registracija}")]
        [HttpPost]
        public async Task<ActionResult> DodajAvion(string naziv, string registracija)
        {
            if(string.IsNullOrWhiteSpace(naziv) || naziv.Length>50)
            {
                return BadRequest("Nevalidno ime!");
            }
            if(string.IsNullOrWhiteSpace(registracija) || registracija.Length>5)
            {
                return BadRequest("Nevalidna registracija!");
            }
            try
            {
                var avion=new Avion
                {
                    Naziv=naziv,
                    Registracija=registracija
                };
                Context.Avioni.Add(avion);
                await Context.SaveChangesAsync();
                return Ok("Avion je dodat!");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PromeniAvion/{id}/{naziv}/{registracija}")]
        [HttpPut]
        public async Task<ActionResult> PromeniAvion(int id, string naziv, string registracija)
        {
            if(id<=0)
            {
                return BadRequest("Pogresan ID!");
            }
           if(string.IsNullOrWhiteSpace(naziv) || naziv.Length>50)
            {
                return BadRequest("Nevalidno ime!");
            }
            if(string.IsNullOrWhiteSpace(registracija) || registracija.Length>5)
            {
                return BadRequest("Nevalidna registracija!");
            }
            try
            {
               var avion = Context.Avioni.Where(p => p.ID == id).FirstOrDefault();
               if(avion!=null)
               {
                   avion.Naziv=naziv;
                   avion.Registracija=registracija; 

                   await Context.SaveChangesAsync();
                   return Ok("Avion izmenjen!");
               }
               return BadRequest("Avion sa zadatim ID-e nije pronadjen.");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    
        [Route("IzbrisiAvion/{id}")]
            [HttpDelete]
            public async Task<ActionResult> IzbrisiAvion(int id)
            {
                if(id<=0)
                {
                    return BadRequest("Pogresan ID!");
                }
                try
                {
                    var avion = await Context.Avioni.FindAsync(id);
                    string ime=avion.Naziv;
                    Context.Avioni.Remove(avion);
                    await Context.SaveChangesAsync();
                    return Ok($"Avion {ime} je uspesno uklonjen.");
                }
                catch(Exception e)
                {
                    return BadRequest(e.Message);
                }
            }
    }
}