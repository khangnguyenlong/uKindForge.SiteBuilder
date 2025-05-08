using System.ComponentModel.DataAnnotations;

namespace GoCoSiteBuilder.Core.ViewModels
{
    public class ContactFormViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public string Phone { get; set; }

        [Required(ErrorMessage = "Message is required")]
        public string Message { get; set; }

        public string IPAddress { get; set; }
        public DateTime SubmittedAt { get; set; }
    }
}
