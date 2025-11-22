using System.ComponentModel.DataAnnotations;

namespace miniissuetracker.Repository.Models
     
{
    public class Issues
    {
    [Key]
    public int IssueID { get; set; }
        public string IssueTitle { get; set; }
        public string IssueDescription { get; set; }
        public DateTime CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public bool IssueResolved { get; set; }
    }
}
