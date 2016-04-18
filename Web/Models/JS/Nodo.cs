using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models.JS
{
    public class Nodo
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<Distance> Distances { get; set; }
        public List<Neighbor> Neighbors { get; set; }
        public Nodo()
        {
            Distances = new List<Distance>();
            Neighbors = new List<Neighbor>();
        }
    }
}