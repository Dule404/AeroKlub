using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Aktivnost")]
    public class Aktivnost
    {
        [Key]
        public int ID { get; set; }

        //[RegularExpression("(1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm])")]
        [Required]
        public string Vreme { get; set; }

        //[RegularExpression("((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)")]
        [Required]
        public string Datum { get; set; }

        [Required]
        [Range(1000,4000)]
        public int Visina { get; set; }

        public Clan Clan { get; set; }
        
        public Avion Avion { get; set; }

        public Padobran Padobran { get; set; }
    }
}