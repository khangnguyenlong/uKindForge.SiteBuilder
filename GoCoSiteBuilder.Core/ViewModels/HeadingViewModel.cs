using GoCoSiteBuilder.Models;

namespace GoCoSiteBuilder.Core.ViewModels
{
    public class HeadingViewModel
    {
        public Heading Heading { get; set; }

        public HeadingViewModel(Heading heading) 
        {
            Heading = heading;
        }
    }
}
