using System.Collections.Generic;

namespace MovieReview.Model
{
    public class Movie
    {
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string DirectorName { get; set; }
        public string ReleaseYear { get; set; }
        public virtual ICollection<MoviesReview> Reviews { get; set; }
    }
}
