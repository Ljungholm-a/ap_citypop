
import React from 'react';

const SearchList = ({searchList=[]}) => {
  return (
    <div>
    { searchList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </div>
  );
}

export default SearchList