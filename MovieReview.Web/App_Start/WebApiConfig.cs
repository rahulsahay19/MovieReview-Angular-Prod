using System.Linq;
using System.Web.Http;

namespace MovieReview.Web
{
    public static class WebApiConfig
    {
        public static string ControllerOnly = "ApiControllerOnly";
        public static string ControllerAndId = "ApiControllerAndIntegerId";
        public static string ControllerAction = "ApiControllerAction";
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            
            // Web API routes
            config.MapHttpAttributeRoutes();
            //Below formatter is used for returning the Json result.
            var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
            config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);

            config.Routes.MapHttpRoute(
               name: ControllerOnly,
               routeTemplate: "api/{controller}"
           );

            config.Routes.MapHttpRoute(
                 name: ControllerAndId,
                 routeTemplate: "api/{controller}/{id}",
                 defaults: null, //defaults: new { id = RouteParameter.Optional } //,
                 constraints: new { id = @"^\d+$" } // id must be all digits
             );

            config.Routes.MapHttpRoute(
               name: ControllerAction,
               routeTemplate: "api/{controller}/{action}"

            );
        }
    }
}
