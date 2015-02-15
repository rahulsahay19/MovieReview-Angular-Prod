using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MovieReview.Data.Contracts;
using MovieReview.Model;

namespace MovieReview.Web.Controllers
{
    public class MovieReviewsController : ApiBaseController
    {
        public MovieReviewsController(IMovieReviewUow uow)
        {
            Uow = uow;
        }

        public IEnumerable<MoviesReview> Get()
        {
            return Uow.MovieReviews.GetAll().OrderBy(m => m.MovieId);
        }


        public IEnumerable<MoviesReview> Get(int Id)
        {
           return Uow.MovieReviews.GetAll().Where(m => m.MovieId == Id);
        }

        // /api/MovieReviews/getbyreviewername?value=rahul
        [System.Web.Http.ActionName("getbyreviewername")]
        public MoviesReview GetByReviewerName(string value)
        {
            var review = Uow.MovieReviews.GetAll().FirstOrDefault(m => m.ReviewerName.StartsWith(value));

            if (review != null) return review;
            throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.NotFound));
        }

        // Update an existing review
        // PUT /api/MovieReviews/
        public HttpResponseMessage Put([FromBody]MoviesReview review)
        {
            //review.Id = Id;
            Uow.MovieReviews.Update(review);
            Uow.Commit();
            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }

        // Create a new review
        // POST /api/MovieReviews
        public HttpResponseMessage Post(MoviesReview review, int Id)
        {
            review.MovieId = Id;
            Uow.MovieReviews.Add(review);
            Uow.Commit();

            var response = Request.CreateResponse(HttpStatusCode.Created, review);


            return response;
        }

        //Delete a review
        //Delete /api/MovieReviews/5
        public HttpResponseMessage Delete(int id)
        {
            Uow.MovieReviews.Delete(id);
            Uow.Commit();
            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }
    }
}
