import React, { Fragment, useEffect,useState } from 'react';
import CustomMapComponent from '../../component/Map/map.tsx';
import { HomepageProps } from './types/homePage.ts';
import {database} from "../../config/configuration"; // Assuming the correct path to your configuration file
import { ref, onValue,get } from "firebase/database";
const HomepageComponent: React.FC<HomepageProps> = (props: any) => {
    const { getLocations, locations, locationLoading } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        getLocations();
    }, []);

    useEffect(() => {
        // const providersRef = ref(database, 'providers'); // Adjust the path as needed
        // console.log('ff',providersRef)
        // const fetchProviders = async () => {
        //     try {
        //         console.log('Attempting to fetch data...');
        //         const snapshot = await get(providersRef);
        //         console.log('ff',snapshot)
        //         if (snapshot.exists()) {
        //             const data = snapshot.val();
        //             console.log('Data fetched:', data);
        //
        //         } else {
        //             console.log('No data available');
        //         }
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // };
        //
        // fetchProviders();



    const dbRef = ref(database);
console.log('f',dbRef)
        const fetchData = () => {
          onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
              console.log('f23233',data)
              const allPaths:any= getAllPaths(data);
              console.log('Data fetched:', allPaths);
            }
          }, (error) => {
            console.error('Error fetching data:', error);
          });
        };


        // const usersRef = ref(database, 'database/');
        // console.log('da',database)
        //
        // const fetchData = () => {
        //   onValue(usersRef, (snapshot) => {
        //     console.log('Snapshot received:', snapshot);
        //     const data = snapshot.val();
        //     console.log('Data fetched:', data);
        //   }, (error) => {
        //     console.error('Error fetching data:', error);
        //   }, {
        //     onlyOnce: true // optional: to fetch data only once
        //   });
        // };
        //
        fetchData();

        // Clean up subscription on unmount
        return () => {
        };
    }, []);


    const getAllPaths = (obj, parentPath = '') => {
        let paths:any = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const currentPath = parentPath ? `${parentPath}/${key}` : key;
                paths.push(currentPath);
                if (typeof obj[key] === 'object') {
                    paths = paths.concat(getAllPaths(obj[key], currentPath));
                }
            }
        }
        return paths;
    };

    return <Fragment>{locationLoading === false && <CustomMapComponent locations={locations} />}</Fragment>;
};

export default HomepageComponent;
