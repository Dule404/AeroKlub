using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Avion")]
    public class Avion
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(5)]
        public string Registracija { get; set; }

        [Required]
        [MaxLength(50)]
        public string Naziv { get; set; }

        [JsonIgnore]
        public List<Aktivnost> Aktivnosti{ get; set; }

        public static explicit operator Avion(Aktivnost v)
        {
            throw new NotImplementedException();
        }
    }
}