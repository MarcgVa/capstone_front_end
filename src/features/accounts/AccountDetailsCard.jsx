import { useEffect, useState } from 'react';
import { useGetUserQuery } from '../../slices/usersSlice';
import ServicesList from '../plans/ServicesList';
import {getWeatherByZip} from '../../utils/weather';
import { useNavigate, useParams } from 'react-router-dom';
import "./accounts.css"
import InvoiceTable from '../../components/InvoiceTable';

export default function AccountDetailsCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [weather, setWeather] = useState({});
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherTemp, setWeatherTemp] = useState();
  const [cutDate, setCutDate] = useState();
  
  const { status, data: selectedUser } = useGetUserQuery(id);
  
  const getWeather = async (zip) => {
      const {data:response} = await getWeatherByZip(zip);

      const icon = response.current.weather[0].icon;
      setWeather(response.current.weather[0].description);  
      setWeatherIcon(`https://openweathermap.org/img/wn/${icon}@4x.png`);
      setWeatherTemp(Math.round(response.current.temp,2));
  };

  const getCutDate = () => { 
    const services = selectedUser?.account?.Services.filter((e) => e.scheduledDate);
    if (services.length > 0) {
      setCutDate(new Date(services[0].scheduledDate).toLocaleDateString());
    } else { 
      setCutDate('No Date available')
    }
  };
  const handleLoadUser = () => { 
    navigate(`/dashboard/edit/user/${user?.id}`)
  };

  const addService = () => {
    navigate(`/dashboard/services/${id}`)
  };

  useEffect(() => {
    if (status === 'fulfilled') { 
      setUser(selectedUser);
      const zip = selectedUser?.account?.zip;
      getWeather(zip);
      getCutDate();
    }
  }, [status])
  

  return (
    <div className="account-details-page">
      <div className="account-details-content">
        <div className="account-details-box">
          {/* box -> one  */}
          <div>
            <h3>Profile:</h3>
            <span
              className="material-symbols-outlined cursor-pointer"
              onClick={handleLoadUser}
            >
              person_edit
            </span>
          </div>
          <article className="account-details-article">
            <p>
              <label className="">First Name: </label>
              <span className="">{user?.account?.firstName}</span>
            </p>

            <p>
              <label className="">Last Name: </label>
              <span className="">{user?.account?.lastName}</span>
            </p>

            <p>
              <label className="">Phone:</label>
              <span className="">{user?.account?.phone}</span>
            </p>
            <p>
              <label className="">Email:</label>
              <span className="">{user?.email}</span>
            </p>
            <p>
              <label className="">Address:</label>
              <span className="">{user?.account?.address}</span>
            </p>
            <p>
              <label className="">City:</label>
              <span className="">{user?.account?.city}</span>
            </p>
            <p>
              <label className="">State:</label>
              <span className="">{user?.account?.state}</span>
            </p>
            <p>
              <label className="">Zip:</label>
              <span className="">{user?.account?.zip}</span>
            </p>
          </article>
        </div>

        <div className="account-details-box">
          {/* box-> two */}

          <div className="cut-date">
            <h3>Next Cut Date:</h3>
            <p>{cutDate}</p>
          </div>
          <div className="account-details-weather bento-weather">
            <img src={weatherIcon} alt={weather} />
            <div className="account-details-weather bento-weather">
              {`${weatherTemp}°`}
            </div>
          </div>
        </div>
        <div className="account-details-box">
          {/* box->three */}
          <div className="icon">
            <span
              onClick={addService}
              className="material-symbols-outlined cursor-pointer"
            >
              forms_add_on
            </span>
          </div>
          <h3>Service Plan:</h3>
          {user && <ServicesList id={user?.id} />}
        </div>
        <div className="account-details-box">
          {/* box->four */}
          <h3>Invoices:</h3>
          <InvoiceTable id={id} />
        </div>
      </div>
    </div>
  );
}
