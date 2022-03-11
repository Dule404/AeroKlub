using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Padobran")]
    public class Padobran
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(20)]
        public string Tip { get; set; }

        [Required]
        [MaxLength(50)]
        public string Naziv { get; set; }

        [Required]
        [Range(50,500)]
        public int Povrsina { get; set; }

        [JsonIgnore]
        public List<Aktivnost> Aktivnosti { get; set; }

        public static explicit operator Padobran(Aktivnost v)
        {
            throw new NotImplementedException();
        }
    }
}