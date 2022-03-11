using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AktivnostController : ControllerBase
    {
        public AeroKlubContext Context { get; set; }
        public AktivnostController(AeroKlubContext context)
        {
            Context = context;        
        }

        [Route("AktivnostiDatum/{datum}")]
        [HttpGet]
        public ActionResult DatumAktivnost(string datum)
        {
            var aktivnost = Context.Aktivnosti
            .Include(p => p.Clan)
            .Include(p => p.Avion)
            .Include(p => p.Padobran)
            .Where(p => p.Datum==datum);
                
            return Ok(aktivnost);
        }
        
        [Route("AktivnostiVisina/{visina}")]
        [HttpGet]
        public ActionResult VisinaAktivnost(int visina)
        {
            var aktivnost = Context.Aktivnosti
            .Include(p => p.Clan)
            .Include(p => p.Avion)
            .Include(p => p.Padobran)
            .Where(p => p.Visina==visina);
                
            return Ok(aktivnost);
        }

        [Route("AktivnostiAvion/{avion}")]
        [HttpGet]
        public ActionResult AvionAktivnost(string avion)
        {
            var av=Context.Avioni.Where(p => p.Registracija==avion).FirstOrDefault();

            var aktivnost = Context.Aktivnosti
            .Include(p => p.Clan)
            .Include(p => p.Avion)
            .Include(p => p.Padobran)
            .Where(p => p.Avion.ID==av.ID);
                
            return Ok(aktivnost);
        }

        [Route("AktivnostiClan/{clanid}")]
        [HttpGet]
        public ActionResult ClanAktivnost(int clanid)
        {
            var aktivnost = Context.Aktivnosti
            .Include(p => p.Clan)
            .Include(p => p.Avion)
            .Include(p => p.Padobran)
            .Where(p => p.Clan.ID==clanid);
                
            return Ok(aktivnost);
        }

        [Route("AktivnostID/{clanid}/{datum}/{vreme}")]
        [HttpGet]
        public ActionResult Aktivnost(int clanid, string datum, string vreme)
        {
            var aktivnost = Context.Aktivnosti
            .Include(p => p.Clan)
            .Include(p => p.Avion)
            .Include(p => p.Padobran)
            .Where(p => p.Clan.ID==clanid && p.Datum==datum && p.Vreme==vreme).FirstOrDefault();
                
            return Ok(aktivnost.ID);
        }


        [Route("Aktivnosti")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiAktivnosti()
        {

            var aktivnosti = Context.Aktivnosti
            .Include(p => p.Clan)
            .Include(p => p.Avion)
            .Include(p => p.Padobran);

            var aktivnost = await aktivnosti.ToListAsync();

            return Ok(aktivnost);
        }

        [Route("DodajAktivnost/{datum}/{vreme}/{visina}/{clanid}/{padobranid}/{avionid}")]
        [HttpPost]
        public async Task<ActionResult> DodajAktivnost(string datum, string vreme, int visina, int clanid, int padobranid, int avionid)
        {
            if(string.IsNullOrWhiteSpace(vreme))
            {
                return BadRequest("Nevalidno vreme!");
            }
            if(string.IsNullOrWhiteSpace(datum))
            {
                return BadRequest("Nevalidan datum!");
            }
            if(visina<1000 || visina>4000)
            {
                return BadRequest("Nevalidna visina!");
            }
            if(clanid<=0)
            {
                return BadRequest("Nevalidan ID clana!");
            }
            if(avionid<=0)
            {
                return BadRequest("Nevalidan ID aviona!");
            }
            if(padobranid<=0)
            {
                return BadRequest("Nevalidan ID padobrana!");
            }
            try
            {
                var clan=Context.Clanovi.Where(p => p.ID == clanid).FirstOrDefault();
                if(clan==null)
                {
                    return BadRequest("Nepostojeci clan!");
                }
                var avion=Context.Avioni.Where(p => p.ID == avionid).FirstOrDefault();
                if(avion==null)
                {
                    return BadRequest("Nepostojeci avion!");
                }
                var padobran=Context.Padobrani.Where(p => p.ID == padobranid).FirstOrDefault();
                if(padobran==null)
                {
                    return BadRequest("Nepostojeci padobran!");
                }
                var aktivnost=new Aktivnost
                {
                Datum=datum,
                Vreme=vreme,
                Visina=visina,
                Clan=clan,
                Avion=avion,
                Padobran=padobran
                };

                Context.Aktivnosti.Add(aktivnost);
                await Context.SaveChangesAsync();
                return Ok("Aktivnost je dodata!");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    
        [Route("IzbrisiAktivnost/{id}")]
            [HttpDelete]
            public async Task<ActionResult> IzbrisiAktivnost(int id)
            {
                if(id<=0)
                {
                    return BadRequest("Pogresan ID!");
                }
                try
                {
                    var aktivnost = await Context.Aktivnosti.FindAsync(id);
                    Context.Aktivnosti.Remove(aktivnost);
                    await Context.SaveChangesAsync();
                    return Ok("Aktivnost je uspesno uklonjena.");
                }
                catch(Exception e)
                {
                    return BadRequest(e.Message);
                }
            }
    }
}