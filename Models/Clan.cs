using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Clan")]
    public class Clan
    {
        [Key]
        public int ID { get; set; }
        
        [Required]
        [MaxLength(50)]
        public string Ime { get; set; }

        [Required]
        [MaxLength(50)]
        public string Prezime { get; set; }
        
        [Range(100,999)]
        public int? BrojDozvole { get; set; }
        
        [MaxLength(50)]
        public string TipDozvole { get; set; }

        [JsonIgnore]
        public List<Aktivnost> Aktivnosti { get; set; }

        public static explicit operator Clan(Aktivnost v)
        {
            throw new NotImplementedException();
        }
    }
}