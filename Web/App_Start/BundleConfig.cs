using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Web.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();
            AddDefaultIgnorePatterns(bundles.IgnoreList);

            bundles.Add(
                new ScriptBundle("~/bundles/angularjs").Include(
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-resource.js",
                    "~/Scripts/angular-ui.js",
                    "~/Scripts/angular-animate.js",
                    "~/Scripts/angular-touch.js",
                    "~/Scripts/ui-bootstrap-tpls-1.3.2.min.js"
                )
            );

            bundles.Add(
                new ScriptBundle("~/bundles/gojs").Include(
                    "~/Scripts/go*"
                )
            );

            bundles.Add(
                new ScriptBundle("~/bundles/custom")
                    .IncludeDirectory("~/Scripts/Custom/models", "*.js")
                    .IncludeDirectory("~/Scripts/Custom/controllers", "*.js")
                    .IncludeDirectory("~/Scripts/Custom/directives", "*.js")
                    .IncludeDirectory("~/Scripts/Custom/factories", "*.js")
                    .IncludeDirectory("~/Scripts/Custom", "*.js")
            );


            bundles.Add(
                new StyleBundle("~/Content/bootstrap").Include(
                    "~/Content/bootstrap*",
                    "~/Content/ui-bootstrap-csp.css"
                )
            );

            bundles.Add(
                new StyleBundle("~/Content/custom").Include(
                    "~/Content/Site.css"
                )
            );
        }

        public static void AddDefaultIgnorePatterns(IgnoreList ignoreList)
        {
            if (ignoreList == null)
                throw new ArgumentNullException("ignoreList");
            ignoreList.Ignore("*.intellisense.js");
            ignoreList.Ignore("*-vsdoc.js");
            ignoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
            //ignoreList.Ignore("*.min.js", OptimizationMode.WhenDisabled);
            ignoreList.Ignore("*.min.css", OptimizationMode.WhenDisabled);
            ignoreList.Ignore("*.ts", OptimizationMode.WhenDisabled);
        }
    }
}