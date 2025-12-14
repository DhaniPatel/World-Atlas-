import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { CountryCard } from "../components/Layout/countryCard";
import { Loader } from "../components/UI/Loader";

export const Country=()=>{
    const [ispending,startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    const [search,setSearch]=useState();
    const [filter,setFilter]=useState();


    useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  },[]);
    if(ispending) return <Loader/>;
    return(
        <section className="country-section">
            <searchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
            <ul className="grid grid-four-cols">
                {countries.map((curcountry,index)=>{
                    return <CountryCard country={curcountry} key={index}/>;
                })}
            </ul>
        </section>
    )
}