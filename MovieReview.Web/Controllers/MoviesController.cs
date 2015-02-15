using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MovieReview.Data.Contracts;
using MovieReview.Model;

namespace MovieReview.Web.Controllers
{
    public class MoviesController : ApiBaseController
    {
        public MoviesController(IMovieReviewUow uow)
        {
            Uow = uow;
        }
        // GET api/movies
        public IQueryable Get()
        {
            var model = Uow.Movies.GetAll().OrderByDescending(m => m.Reviews.Count())
                .Select(m => new MovieViewModel
                {
                    Id = m.Id,
                    MovieName = m.MovieName,
                    DirectorName = m.DirectorName,
                    ReleaseYear = m.ReleaseYear,
                    NoOfReviews = m.Reviews.Count()
                });
            return model; 

        }

        // GET api/movies/5
        public Movie Get(int id)
        {
            var movie = Uow.Movies.GetById(id);
            if (movie != null) return movie;
            throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.NotFound));
        }

        // Update an existing movie
        // PUT /api/movies/
        public HttpResponseMessage Put([FromBody]Movie movie)
        {
            Uow.Movies.Update(movie);
            Uow.Commit();
            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }

        // Create a new movie
        // POST /api/movies
        public HttpResponseMessage Post(Movie movie)
        {
            Uow.Movies.Add(movie);
            Uow.Commit();

            var response = Request.CreateResponse(HttpStatusCode.Created, movie);
            return response;
        }

        // DELETE api/movies/5
        public HttpResponseMessage Delete(int id)
        {
            Uow.Movies.Delete(id);
            Uow.Commit();
            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }
    }
}
