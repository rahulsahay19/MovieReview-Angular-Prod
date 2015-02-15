using MovieReview.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieReview.Data.Contracts
{
    /// <summary>
    /// Interface for UOW Movie Review
    /// </summary>
    public interface IMovieReviewUow
    {
        void Commit();
        IRepository<Movie> Movies { get; }
        IRepository<MoviesReview> MovieReviews { get; }


    }
}
