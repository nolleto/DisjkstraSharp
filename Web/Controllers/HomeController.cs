using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Web.Models;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Execute(Models.JS.Nodo[] nodos)
        {
            //var nodo0 = new Nodo("0");
            //var nodo1 = new Nodo("1");
            //var nodo2 = new Nodo("2");
            //var nodo3 = new Nodo("3");
            //var nodo4 = new Nodo("4");
            //var nodo5 = new Nodo("5");
            //var nodo6 = new Nodo("6");
            //var nodo7 = new Nodo("7");
            //var nodos2 = new Nodo[] { nodo0, nodo1, nodo2, nodo3, nodo4, nodo5, nodo6, nodo7 };

            //nodo0.AddNeighbor(nodo5, 1);
            //nodo0.AddNeighbor(nodo2, 1);
            //nodo1.AddNeighbor(nodo0, 1);
            //nodo2.AddNeighbor(nodo1, 1);
            //nodo2.AddNeighbor(nodo3, 1);
            //nodo3.AddNeighbor(nodo0, 1);
            //nodo4.AddNeighbor(nodo2, 1);
            //nodo5.AddNeighbor(nodo6, 1);
            //nodo5.AddNeighbor(nodo7, 1);
            //nodo6.AddNeighbor(nodo4, 1);
            //nodo7.AddNeighbor(nodo4, 1);
            var nodos2 = Convert(nodos);

            Disjkstra.Execute(nodos2);

            return Json(Convert(nodos2), JsonRequestBehavior.AllowGet);
        }

        private Nodo[] Convert(Models.JS.Nodo[] nodos)
        {
            var result = new List<Nodo>();

            foreach (var item in nodos)
            {
                var n = new Nodo(item.Name);
                n.Id = item.Id;
                result.Add(n);
            }
            foreach (var item in nodos)
            {
                var n = result.Single(x => x.Id == item.Id);
                foreach (Models.JS.Neighbor neighbor in item.Neighbors)
                {
                    var neig = result.Single(x => x.Id == neighbor.Id);
                    n.AddNeighbor(neig, neighbor.Distance);
                }
            }

            return result.ToArray();
        }

        private List<Models.JS.Nodo> Convert(Nodo[] nodos)
        {
            var result = new List<Models.JS.Nodo>();
            foreach (var item in nodos)
            {
                var distances = new List<Models.JS.Distance>();

                foreach (var d in item.Distances)
                {
                    distances.Add(
                        new Models.JS.Distance()
                        {
                            IdTarget = d.Key,
                            Value = d.Value.Distance,
                            Traveleds = d.Value.IdNodosTraveleds
                        }
                    );
                }

                result.Add(
                    new Models.JS.Nodo()
                    {
                        Id = item.Id,
                        Name = item.Name,
                        Distances = distances
                    }
                );
            }

            return result;
        }
    }
}