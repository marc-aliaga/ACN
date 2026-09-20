// Operaciones que se ven SOLO en el mapa de propiedades (PropertiesMap). Salen de
// info/plantilla_propiedades_reales.xlsx; no se mezclan con properties.properties para
// que las tarjetas y RealCases sigan mostrando solo los casos destacados.
//
// - permiso_propietario_mostrar_calle = "no": NO se publica la calle (address = barrio) y
//   el pin se sitúa a nivel de barrio con un desplazamiento de 200-400 m.
// - Sin fotos reales: todas usan fotos de referencia (stock).
// - Sin bloque `market`: el modal lo omite si no existe (no inventamos datos de zona).

export const mapProperties = [
  {
    "id": "op-01",
    "tag": "Operación hecha",
    "address": "Carrer de la Foradada",
    "location": "La Trinitat Vella, Barcelona",
    "city": "Barcelona",
    "coordinates": "41.4522° N, 2.1917° E",
    "lat": 41.4522,
    "lng": 2.1917,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "256 70% 30%",
    "beds": 4,
    "baths": 2,
    "sqm": 80,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "21,7%",
    "descriptionBullets": [
      "80 m² · 4 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 24 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.575 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "10.800 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "21,7%"
      },
      {
        "label": "Plazo",
        "value": "24 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.575 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "2.600 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "1.025 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-02",
    "tag": "Operación hecha",
    "address": "Montjuïc",
    "location": "Barcelona",
    "city": "Barcelona",
    "coordinates": "41.3616° N, 2.1684° E",
    "lat": 41.3616,
    "lng": 2.1684,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "230 65% 32%",
    "beds": 3,
    "baths": 1,
    "sqm": 70,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "13,7%",
    "descriptionBullets": [
      "70 m² · 3 habitaciones · 1 baño",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 24 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.175 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "8.300 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "13,7%"
      },
      {
        "label": "Plazo",
        "value": "24 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.175 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "1.800 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "625 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-03",
    "tag": "Operación hecha",
    "address": "Carrer de Lloret de Mar",
    "location": "El Congrés i els Indians, Barcelona",
    "city": "Barcelona",
    "coordinates": "41.4349° N, 2.1564° E",
    "lat": 41.4349,
    "lng": 2.1564,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "280 55% 30%",
    "beds": 5,
    "baths": 2,
    "sqm": 95,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "12,4%",
    "descriptionBullets": [
      "95 m² · 5 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 36 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.675 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "7.900 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "12,4%"
      },
      {
        "label": "Plazo",
        "value": "36 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.675 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "2.650 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "975 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-04",
    "tag": "Operación hecha",
    "address": "Carrer del Pintor Alsamora",
    "location": "Porta, Barcelona",
    "city": "Barcelona",
    "coordinates": "41.4355° N, 2.1782° E",
    "lat": 41.4355,
    "lng": 2.1782,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "256 70% 30%",
    "beds": 3,
    "baths": 1,
    "sqm": 70,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "16,1%",
    "descriptionBullets": [
      "70 m² · 3 habitaciones · 1 baño",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 12 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.325 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "6.900 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "16,1%"
      },
      {
        "label": "Plazo",
        "value": "12 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.325 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "1.890 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "565 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-05",
    "tag": "Operación hecha",
    "address": "Carrer del Bonsuccés",
    "location": "El Raval, Barcelona",
    "city": "Barcelona",
    "coordinates": "41.3843° N, 2.1702° E",
    "lat": 41.3843,
    "lng": 2.1702,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "230 65% 32%",
    "beds": 3,
    "baths": 1,
    "sqm": 70,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "14,1%",
    "descriptionBullets": [
      "70 m² · 3 habitaciones · 1 baño",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 24 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.175 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "8.300 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "14,1%"
      },
      {
        "label": "Plazo",
        "value": "24 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.175 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "1.980 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "805 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-06",
    "tag": "Operación hecha",
    "address": "El Barri Gòtic",
    "location": "Barcelona",
    "city": "Barcelona",
    "coordinates": "41.3845° N, 2.1785° E",
    "lat": 41.3845,
    "lng": 2.1785,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "280 55% 30%",
    "beds": 5,
    "baths": 1,
    "sqm": 120,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "15,3%",
    "descriptionBullets": [
      "120 m² · 5 habitaciones · 1 baño",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 36 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.775 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "10.500 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "15,3%"
      },
      {
        "label": "Plazo",
        "value": "36 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.775 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "2.750 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "975 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-07",
    "tag": "Operación hecha",
    "address": "Carrer de Peníscola",
    "location": "La Trinitat Vella, Barcelona",
    "city": "Barcelona",
    "coordinates": "41.4532° N, 2.1898° E",
    "lat": 41.4532,
    "lng": 2.1898,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "256 70% 30%",
    "beds": 6,
    "baths": 2,
    "sqm": 130,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "25%",
    "descriptionBullets": [
      "130 m² · 6 habitaciones · 2 baños",
      "Tipo de operación: Flip",
      "Plazo pactado: 36 meses"
    ],
    "managementBullets": [
      "Gestión integral de la reforma y de la operación por nuestro equipo",
      "El propietario cobra su renta fija: 2.750 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "10.200 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "25%"
      },
      {
        "label": "Plazo",
        "value": "36 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "2.750 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "3.960 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "1.210 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-08",
    "tag": "Operación hecha",
    "address": "Passeig de la Zona Franca",
    "location": "La Marina de Port, Barcelona",
    "city": "Barcelona",
    "coordinates": "41.3554° N, 2.1426° E",
    "lat": 41.3554,
    "lng": 2.1426,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "230 65% 32%",
    "beds": 3,
    "baths": 1,
    "sqm": 55,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "27,4%",
    "descriptionBullets": [
      "55 m² · 3 habitaciones · 1 baño",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 12 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.000 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "8.700 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "27,4%"
      },
      {
        "label": "Plazo",
        "value": "12 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.000 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "1.680 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "680 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-09",
    "tag": "Operación hecha",
    "address": "Alameda de Barceló",
    "location": "Capuchinos, Málaga",
    "city": "Málaga",
    "coordinates": "36.7320° N, 4.4179° W",
    "lat": 36.732,
    "lng": -4.4179,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "280 55% 30%",
    "beds": 5,
    "baths": 2,
    "sqm": 110,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "13,1%",
    "descriptionBullets": [
      "110 m² · 5 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 24 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.525 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "11.500 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "13,1%"
      },
      {
        "label": "Plazo",
        "value": "24 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.525 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "2.450 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "925 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-10",
    "tag": "Operación hecha",
    "address": "Capuchinos",
    "location": "Málaga",
    "city": "Málaga",
    "coordinates": "36.7263° N, 4.4229° W",
    "lat": 36.7263,
    "lng": -4.4229,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "256 70% 30%",
    "beds": 3,
    "baths": 2,
    "sqm": 70,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "26,7%",
    "descriptionBullets": [
      "70 m² · 3 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 48 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 800 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "7.600 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "26,7%"
      },
      {
        "label": "Plazo",
        "value": "48 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "800 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "1.290 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "490 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-11",
    "tag": "Operación hecha",
    "address": "Ensanche Centro",
    "location": "Málaga",
    "city": "Málaga",
    "coordinates": "36.7159° N, 4.4267° W",
    "lat": 36.7159,
    "lng": -4.4267,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "230 65% 32%",
    "beds": 6,
    "baths": 2,
    "sqm": 140,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "22,4%",
    "descriptionBullets": [
      "140 m² · 6 habitaciones · 2 baños",
      "Tipo de operación: Flip",
      "Plazo pactado: 24 meses"
    ],
    "managementBullets": [
      "Gestión integral de la reforma y de la operación por nuestro equipo",
      "El propietario cobra su renta fija: 1.800 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "11.100 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "22,4%"
      },
      {
        "label": "Plazo",
        "value": "24 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.800 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "2.940 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "1.140 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-12",
    "tag": "Operación hecha",
    "address": "Alameda del Patrocinio",
    "location": "Olletas, Málaga",
    "city": "Málaga",
    "coordinates": "36.7323° N, 4.4183° W",
    "lat": 36.7323,
    "lng": -4.4183,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "280 55% 30%",
    "beds": 6,
    "baths": 3,
    "sqm": 120,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "22,2%",
    "descriptionBullets": [
      "120 m² · 6 habitaciones · 3 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 60 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.775 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "12.100 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "22,2%"
      },
      {
        "label": "Plazo",
        "value": "60 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.775 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "3.000 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "1.225 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-13",
    "tag": "Operación hecha",
    "address": "Alameda Principal",
    "location": "Centro Histórico, Málaga",
    "city": "Málaga",
    "coordinates": "36.7176° N, 4.4234° W",
    "lat": 36.7176,
    "lng": -4.4234,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "256 70% 30%",
    "beds": 4,
    "baths": 2,
    "sqm": 75,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "19,2%",
    "descriptionBullets": [
      "75 m² · 4 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 48 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.125 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "7.400 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "19,2%"
      },
      {
        "label": "Plazo",
        "value": "48 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.125 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "1.760 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "635 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-14",
    "tag": "Operación hecha",
    "address": "Centro Histórico",
    "location": "Málaga",
    "city": "Málaga",
    "coordinates": "36.7212° N, 4.4262° W",
    "lat": 36.7212,
    "lng": -4.4262,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "230 65% 32%",
    "beds": 3,
    "baths": 2,
    "sqm": 65,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "18,3%",
    "descriptionBullets": [
      "65 m² · 3 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 12 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 800 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "10.300 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "18,3%"
      },
      {
        "label": "Plazo",
        "value": "12 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "800 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "1.230 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "430 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-15",
    "tag": "Operación hecha",
    "address": "Alcalde Nicolás Maroto",
    "location": "Ciudad Jardín, Málaga",
    "city": "Málaga",
    "coordinates": "36.7492° N, 4.4182° W",
    "lat": 36.7492,
    "lng": -4.4182,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "280 55% 30%",
    "beds": 6,
    "baths": 2,
    "sqm": 110,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "20%",
    "descriptionBullets": [
      "110 m² · 6 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 48 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 2.125 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "9.000 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "20%"
      },
      {
        "label": "Plazo",
        "value": "48 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "2.125 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "3.360 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "1.235 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-16",
    "tag": "Operación hecha",
    "address": "Alfonso Ponce de León",
    "location": "Churriana, Málaga",
    "city": "Málaga",
    "coordinates": "36.6561° N, 4.4785° W",
    "lat": 36.6561,
    "lng": -4.4785,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "256 70% 30%",
    "beds": 4,
    "baths": 2,
    "sqm": 75,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "17,4%",
    "descriptionBullets": [
      "75 m² · 4 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 24 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.525 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "8.100 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "17,4%"
      },
      {
        "label": "Plazo",
        "value": "24 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.525 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "2.280 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "755 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-17",
    "tag": "Operación hecha",
    "address": "Alfredo Nobel",
    "location": "Las Chapas, Málaga",
    "city": "Málaga",
    "coordinates": "36.7208° N, 4.4406° W",
    "lat": 36.7208,
    "lng": -4.4406,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "230 65% 32%",
    "beds": 3,
    "baths": 2,
    "sqm": 65,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "15,1%",
    "descriptionBullets": [
      "65 m² · 3 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 48 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.075 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "6.500 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "15,1%"
      },
      {
        "label": "Plazo",
        "value": "48 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.075 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "1.620 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "545 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-18",
    "tag": "Operación hecha",
    "address": "Mármoles",
    "location": "Málaga",
    "city": "Málaga",
    "coordinates": "36.7178° N, 4.4297° W",
    "lat": 36.7178,
    "lng": -4.4297,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "280 55% 30%",
    "beds": 6,
    "baths": 2,
    "sqm": 125,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "18,5%",
    "descriptionBullets": [
      "125 m² · 6 habitaciones · 2 baños",
      "Tipo de operación: Flip",
      "Plazo pactado: 12 meses"
    ],
    "managementBullets": [
      "Gestión integral de la reforma y de la operación por nuestro equipo",
      "El propietario cobra su renta fija: 1.800 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "13.200 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "18,5%"
      },
      {
        "label": "Plazo",
        "value": "12 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.800 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "3.180 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "1.380 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-19",
    "tag": "Operación hecha",
    "address": "El Palo",
    "location": "Málaga",
    "city": "Málaga",
    "coordinates": "36.7235° N, 4.3583° W",
    "lat": 36.7235,
    "lng": -4.3583,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "256 70% 30%",
    "beds": 4,
    "baths": 2,
    "sqm": 85,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "25,2%",
    "descriptionBullets": [
      "85 m² · 4 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 48 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.350 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "9.800 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "25,2%"
      },
      {
        "label": "Plazo",
        "value": "48 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.350 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "2.080 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "730 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-20",
    "tag": "Operación hecha",
    "address": "Andrés Llordén",
    "location": "Cruz de Humilladero, Málaga",
    "city": "Málaga",
    "coordinates": "36.7134° N, 4.4739° W",
    "lat": 36.7134,
    "lng": -4.4739,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "230 65% 32%",
    "beds": 5,
    "baths": 2,
    "sqm": 105,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "21,5%",
    "descriptionBullets": [
      "105 m² · 5 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 48 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.700 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "10.700 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "21,5%"
      },
      {
        "label": "Plazo",
        "value": "48 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.700 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "2.700 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "1.000 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-21",
    "tag": "Operación hecha",
    "address": "Avenida Abenarabi",
    "location": "Santa María de Gracia, Murcia",
    "city": "Murcia",
    "coordinates": "37.9962° N, 1.1343° W",
    "lat": 37.9962,
    "lng": -1.1343,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "280 55% 30%",
    "beds": 5,
    "baths": 2,
    "sqm": 90,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "29,1%",
    "descriptionBullets": [
      "90 m² · 5 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 36 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.575 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "7.700 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "29,1%"
      },
      {
        "label": "Plazo",
        "value": "36 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.575 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "2.500 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "925 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-22",
    "tag": "Operación hecha",
    "address": "La Fama",
    "location": "Murcia",
    "city": "Murcia",
    "coordinates": "37.9885° N, 1.1252° W",
    "lat": 37.9885,
    "lng": -1.1252,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "256 70% 30%",
    "beds": 3,
    "baths": 2,
    "sqm": 65,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "18,8%",
    "descriptionBullets": [
      "65 m² · 3 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 36 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 775 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "6.400 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "18,8%"
      },
      {
        "label": "Plazo",
        "value": "36 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "775 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "1.260 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "485 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-23",
    "tag": "Operación hecha",
    "address": "El Carmen",
    "location": "Murcia",
    "city": "Murcia",
    "coordinates": "37.9760° N, 1.1316° W",
    "lat": 37.976,
    "lng": -1.1316,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "230 65% 32%",
    "beds": 3,
    "baths": 2,
    "sqm": 75,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "18,3%",
    "descriptionBullets": [
      "75 m² · 3 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 48 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 875 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "8.500 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "18,3%"
      },
      {
        "label": "Plazo",
        "value": "48 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "875 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "1.440 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "565 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-24",
    "tag": "Operación hecha",
    "address": "La Flota",
    "location": "Murcia",
    "city": "Murcia",
    "coordinates": "37.9910° N, 1.1208° W",
    "lat": 37.991,
    "lng": -1.1208,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "280 55% 30%",
    "beds": 3,
    "baths": 1,
    "sqm": 70,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "19,2%",
    "descriptionBullets": [
      "70 m² · 3 habitaciones · 1 baño",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 60 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 750 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "8.600 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "19,2%"
      },
      {
        "label": "Plazo",
        "value": "60 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "750 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "1.230 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "480 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-25",
    "tag": "Operación hecha",
    "address": "San Miguel",
    "location": "Murcia",
    "city": "Murcia",
    "coordinates": "37.9868° N, 1.1341° W",
    "lat": 37.9868,
    "lng": -1.1341,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=70",
    "themeColor": "256 70% 30%",
    "beds": 6,
    "baths": 3,
    "sqm": 115,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "29,9%",
    "descriptionBullets": [
      "115 m² · 6 habitaciones · 3 baños",
      "Tipo de operación: Flip",
      "Plazo pactado: 12 meses"
    ],
    "managementBullets": [
      "Gestión integral de la reforma y de la operación por nuestro equipo",
      "El propietario cobra su renta fija: 1.675 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "13.200 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "29,9%"
      },
      {
        "label": "Plazo",
        "value": "12 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.675 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "2.820 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "1.145 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  },
  {
    "id": "op-26",
    "tag": "Operación hecha",
    "address": "La Fama",
    "location": "Murcia",
    "city": "Murcia",
    "coordinates": "37.9922° N, 1.1231° W",
    "lat": 37.9922,
    "lng": -1.1231,
    "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70",
    "themeColor": "230 65% 32%",
    "beds": 6,
    "baths": 2,
    "sqm": 125,
    "yieldLabel": "Rentabilidad pactada",
    "yieldValue": "26,2%",
    "descriptionBullets": [
      "125 m² · 6 habitaciones · 2 baños",
      "Tipo de operación: Rent to Rent",
      "Plazo pactado: 12 meses"
    ],
    "managementBullets": [
      "Gestión integral: captación, amueblamiento, inquilinos y mantenimiento",
      "El propietario cobra su renta fija: 1.800 €/mes"
    ],
    "financials": [
      {
        "label": "Capital aportado por el inversor",
        "value": "11.900 €"
      },
      {
        "label": "Rentabilidad pactada",
        "value": "26,2%"
      },
      {
        "label": "Plazo",
        "value": "12 meses"
      },
      {
        "label": "Renta pagada al propietario",
        "value": "1.800 €/mes"
      },
      {
        "label": "Ingreso medio estimado por habitaciones",
        "value": "2.820 €/mes"
      },
      {
        "label": "Margen bruto mensual estimado (ingresos − renta)",
        "value": "1.020 €/mes"
      }
    ],
    "disclaimer": "Cifras estimadas por nuestro equipo a partir de la renta pactada con el propietario y los ingresos por habitaciones esperados; pueden variar según la ocupación real y no constituyen una garantía de resultados. Por confidencialidad con los propietarios no mostramos el número de portal, y cuando el propietario no ha autorizado mostrar la calle la ubicación es aproximada a nivel de barrio. Las fotos son de referencia (stock) y no corresponden al inmueble."
  }
];
