using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using LearnJS.HeroManagement.ReadModel;
using LearnJS.HeroManagement.ReadModel.Implementation;
using Microsoft.Practices.Unity;

namespace LearnJS.Api
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        private IUnityContainer _container;

        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            //Database initializer
            DatabaseSetup.Initialize();

            //Automapper initializer
            AutomapperConfiguration.Configure();

            //Create Unity container
            _container = CreateContainer();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityResolver(_container);
        }

        private UnityContainer CreateContainer()
        {
            var container = new UnityContainer();

            container.RegisterType<HeroDbContext>(new TransientLifetimeManager(),
                new InjectionConstructor(HeroDbContext.SchemaName));

            container.RegisterType<IHeroDao, HeroDao>();


            return container;
        }
    }
}
