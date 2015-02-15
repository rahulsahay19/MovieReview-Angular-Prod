using MovieReview.Data.SampleData;
using MovieReview.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieReview.Data
{
   public class MovieReviewDbContext :DbContext
    {
       
       public MovieReviewDbContext() : base(nameOrConnectionString: "MoviesReviewProd") { }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<MoviesReview> MovieReviews { get; set; }

        //invoke this to seed default values for the 1st run
        //comment the intializer code in production
        static MovieReviewDbContext()
        {
            Database.SetInitializer(new MovieReviewDatabaseInitializer());
        }

        //setting EF Convetions
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //use singular table names
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }
    }
}
