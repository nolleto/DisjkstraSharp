using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class Disjkstra
    {

        public static void Execute(Nodo nodo, Nodo[] nodos)
        {

        }

        public static void Execute(Nodo[] nodos)
        {
            var length = nodos.Length;
            foreach (var nodo in nodos)
            {
                var dist = nodo.GenerateDefaultDistances(nodos);
                var researched = new List<string>();

                researched.Add(nodo.Id);
                dist[nodo.Id] = new DistancePath()
                {
                    Distance = 0
                }.SetIdNodos(researched);
                
                Execute(nodos, nodo, dist, researched, 0);
            }
        }

        private static void Execute(Nodo[] nodos, Nodo nodo, Dictionary<string, DistancePath> dist, List<string> researched, double weight)
        {
            DistNeighbors(nodo, dist, weight);
            var idNewNodo = LowerDistanceValid(dist, researched);
            dist[idNewNodo].SetIdNodos(researched);
            researched.Add(idNewNodo);

            if (nodos.Length > researched.Count())
            {
                var newNodo = nodos
                    .Where(x => x.Id == idNewNodo)
                    .First();
                Execute(nodos, newNodo, dist, researched, dist[idNewNodo].Distance);
            }
        }

        private static void DistNeighbors(Nodo nodo, Dictionary<string, DistancePath> dist, double weight)
        {
            foreach (var item in nodo.Neighbors)
            {
                var newDistance = item.Distance + weight;
                if (dist[item.IdNodo].Distance > newDistance)
                {
                    dist[item.IdNodo].Distance = newDistance;
                }
            }
        }

        private static string LowerDistanceValid(Dictionary<string, DistancePath> dist, List<string> researched)
        {
            string idNodo = string.Empty;
            double value = Double.MaxValue;
            foreach (var item in dist)
            {
                if (researched.Contains(item.Key)) continue;
                if (item.Value.Distance < value)
                {
                    value = item.Value.Distance;
                    idNodo = item.Key;
                }
            }

            return idNodo;
        }
    }
}