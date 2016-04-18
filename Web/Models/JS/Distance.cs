using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Models.JS
{
    public class Distance
    {
        public string IdTarget { get; set; }
        public double Value { get; set; }
        public List<string> Traveleds { get; set; }

        public Distance()
        {
            Traveleds = new List<string>();
        }
    }
}