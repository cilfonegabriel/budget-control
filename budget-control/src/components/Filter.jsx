import { useState, useEffect} from 'react'

const Filter = ({filter, setFilter}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filter Expenses</label>
                <select
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                >
                    <option value="">-- All categories --</option>
                    <option value="saving">Saving</option>
                    <option value="meal">Meal</option>
                    <option value="house">House</option>
                    <option value="miscellaneous">Miscellaneous expenses</option>
                    <option value="leisure">Leisure</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                </select>

            </div>

        </form>
      
    </div>
  )
}

export default Filter
