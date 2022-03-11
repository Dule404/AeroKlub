using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class AeroKlubContext : DbContext
    {
        public DbSet<Aktivnost> Aktivnosti { get; set; }

        public DbSet<Avion> Avioni { get; set; }
       
        public DbSet<Padobran> Padobrani { get; set; }

        public DbSet<Clan> Clanovi { get; set; }

        
        public AeroKlubContext(DbContextOptions options) : base(options)
        {
            
        }

    }

}