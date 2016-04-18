using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class Nodo
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<Neighbor> Neighbors { get; set; }
        public Dictionary<string, DistancePath> Distances { get; set; }

        public Nodo(string name)
        {
            Id = Guid.NewGuid().ToString();
            Distances = new Dictionary<string, DistancePath>();
            Neighbors = new List<Neighbor>();
            Name = name;
        }

        public void AddNeighbor(Nodo nodo, double distance)
        {
            Neighbors.Add(new Neighbor()
            {
                IdNodo = nodo.Id,
                Distance = distance
            });
        }

        public Dictionary<string, DistancePath> GenerateDefaultDistances(Nodo[] nodos)
        {
            foreach (var nodo in nodos)
            {
                Distances.Add(nodo.Id, new DistancePath());
            }
            return Distances;
        }
    }
}