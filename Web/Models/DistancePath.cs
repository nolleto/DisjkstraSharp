using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models
{
    public class DistancePath
    {
        public string IdCurrentNodo { get; set; }
        public List<string> IdNodosTraveleds { get; private set; }
        public double Distance { get; set; }

        public DistancePath()
        {
            IdNodosTraveleds = new List<string>();
            Distance = Double.MaxValue;
        }

        public DistancePath SetIdNodos(List<string> idNodos)
        {
            var result = new List<string>();
            for (int i = 1; i < idNodos.Count(); i++)
            {
                result.Add(idNodos[i]);
            }
            IdNodosTraveleds = result;
            return this;
        }
    }
}