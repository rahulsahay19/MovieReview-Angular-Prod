 public static void RegisterTypes(IUnityContainer container)
        {
            // NOTE: To load from web.config uncomment the line below. Make sure to add a Microsoft.Practices.Unity.Configuration to the using statements.
             //container.LoadConfiguration();

            // TODO: Register your types here
            //Check below approach
           // container.RegisterInstance<System.ServiceModel.ChannelFactory<IContactServiceAsync>>(new System.ServiceModel.ChannelFactory<ISecurityService>("*"));
            container.RegisterInstance(new ChannelFactory<IContactServiceAsync>("IContactService"));

           // container.RegisterType(new ChannelFactory<IContactServiceAsync>("*"));
            container.RegisterType<IContactServiceAsync, ContactServiceAsync>();
        }
