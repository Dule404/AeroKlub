using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Models;

namespace web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClanController : ControllerBase
    {
        public AeroKlubContext Context { get; set; }
        public ClanController(AeroKlubContext context)
        {
            Context = context;        
        }

        [Route("PrikaziClanove")]
        [HttpGet]
        public ActionResult Preuzmi()
        {
            return Ok(Context.Clanovi);
        }

        [Route("PrikaziClana/{id}")]
        [HttpGet]
        public ActionResult PreuzmiClana(int id)
        {
            var clan= Context.Clanovi.Where(p => p.ID==id).FirstOrDefault();
            var PunoIme=clan.Ime +" "+ clan.Prezime;
            return Ok(PunoIme);
        }

        [Route("DodajClana/{ime}/{prezime}/{brojDozvole}/{tip}")]
        [HttpPost]
        public async Task<ActionResult> DodajClana(string ime, string prezime, int brDozvole, string tip)
        {
            if(string.IsNullOrWhiteSpace(ime) || ime.Length>50)
            {
                return BadRequest("Nevalidno ime!");
            }
            if(string.IsNullOrWhiteSpace(prezime) || prezime.Length>50)
            {
                return BadRequest("Nevalidno prezime!");
            }
            try
            {
                var clan=new Clan()
                {
                    Ime=ime,
                    Prezime=prezime,
                    BrojDozvole=brDozvole,
                    TipDozvole=tip,
                };
                Context.Clanovi.Add(clan);
                await Context.SaveChangesAsync();
                return Ok("Clan je dodat!");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PromeniClana/{id}/{ime}/{prezime}/{tipDozvole}/{brojDozvole}")]
        [HttpPut]
        public async Task<ActionResult> PromeniClana(int id, string ime, string prezime, string tipDozvole, int brojDozvole)
        {
            if(id<=0)
            {
                return BadRequest("Pogresan ID!");
            }
            if(string.IsNullOrWhiteSpace(ime) || ime.Length>50)
            {
                return BadRequest("Nevalidno ime!");
            }
            if(string.IsNullOrWhiteSpace(prezime) || prezime.Length>50)
            {
                return BadRequest("Nevalidno prezime!");
            }
            try
            {
               var clan = Context.Clanovi.Where(p => p.ID == id).FirstOrDefault();
               if(clan!=null)
               {
                   clan.Ime=ime;
                   clan.Prezime=prezime;
                   clan.TipDozvole=tipDozvole;
                   clan.BrojDozvole=brojDozvole;

                   await Context.SaveChangesAsync();
                   return Ok("Clan izmenjen!");
               }
               return BadRequest("Clan sa zadatim ID-e nije pronadjen.");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("IzbrisiClana/{id}")]
        [HttpDelete]
        public async Task<ActionResult> IzbrisiClana(int id)
        {
            if(id<=0)
            {
                return BadRequest("Pogresan ID!");
            }
            try
            {
                var clan = await Context.Clanovi.FindAsync(id);
                string ime=clan.Ime;
                string prezime=clan.Prezime;
                Context.Clanovi.Remove(clan);
                await Context.SaveChangesAsync();
                return Ok($"Clan {ime} {prezime} je uspesno uklonjen.");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
