const navigation = () => {
  return [
    {
      icon: 'tabler:smart-home',
      title: 'players',
      children: [
        {
          icon: 'tabler:chart-pie-2',
          title: 'Add player',
          path: '/players/addplayers'
        }
      ]
    },
    {
      icon: 'tabler:smart-home',
      title: 'User Profile',
      path: '/coach/coachProfile/[id]'
    },
    {
      title: 'Players',
      icon: 'tabler:report',
      path: '/players/playerProfile/[id]'
    },

  ]
}

export default navigation
