export default {
  items: [
    {
      name: 'Home',
      url: '/dashboard',
      icon: 'icon-home'
    },
    {
      name: 'Browse Spare Parts',
      url: '/catalogue',
      icon: 'icon-list'
    },
    {
      name: 'Kriteria',
      url: '/kriteria',
      icon: 'icon-note',
      children: [
        {
          name: 'Kriteria Umum',
          url: '/kriteria',
        },
        {
          name: 'Sub Kriteria',
          url: '/subkriteria',
          children: [
            {
              name: 'Kategori',
              url: '/kategori'
            },
            {
              name: 'Merk',
              url: '/merk'
            },
            {
              name: 'Harga',
              url: '/harga'
            },
            {
              name: 'Garansi',
              url: '/garansi'
            }
          ]
        },
      ],
    },
    {
      name: 'Perhitungan',
      url: '/perhitungan',
      icon: 'icon-calculator',
      children: [
        {
          name: 'TOPSIS',
          url: '/topsis'
        },
        {
          name: 'SAW',
          url: '/saw'
        }
      ]
    },
    {
      name: 'Logout',
      url: '/login',
      icon: 'icon-lock',
      attributes: {
        onClick: e => {
          localStorage.removeItem("user");
        }
      }
    }
  ],
};
