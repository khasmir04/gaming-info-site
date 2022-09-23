const categories = [
  '-SELECT ALL-',
  '3d',
  '2d',
  'action',
  'action-rpg',
  'anime',
  'battle-royale',
  'card',
  'fantasy',
  'fighting',
  'flight',
  'mmorpg',
  'shooter',
  'strategy',
  'moba',
  'racing',
  'sports',
  'social',
  'sandbox',
  'open-world',
  'survival',
  'pvp',
  'pve',
  'pixel',
  'voxel',
  'zombie',
  'turn-based',
  'first-person',
  'third-Person',
  'top-down',
  'tank',
  'space',
  'sailing',
  'side-scroller',
  'superhero',
  'permadeath',
  'mmo',
  'mmofps',
  'mmotps',
  'sci-fi',
  'military',
  'martial-arts',
  'low-spec',
  'tower-defense',
  'horror',
  'mmorts',
]

const Dropdown = (props) => {
  const { value, onChange } = props

  return (
    <div>
      <select
        className='nunito text-sm uppercase rounded-lg'
        value={value}
        onChange={onChange}
      >
        {categories
          .sort()
          .map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            )
          })}
      </select>
    </div>
  )
}

export default Dropdown
