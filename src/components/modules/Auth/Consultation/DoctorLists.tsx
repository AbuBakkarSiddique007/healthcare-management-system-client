/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getDoctors } from '@/app/(commonLayout)/consultation/_actions';
import { useQuery } from '@tanstack/react-query';


const DoctorLists = () => {

    const { data, isFetching } = useQuery({
        queryKey: ['doctors'],
        queryFn: getDoctors,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    console.log("Data : ", data);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>
                DoctorLists Page - This page will display a list of doctors fetched from the server.
            </h1>

            <div>
                {
                    data?.map((doctor: any) => (
                        <div key={doctor.id}>
                            <h2>{doctor.name}</h2>
                            <p>{doctor.specialization}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DoctorLists;