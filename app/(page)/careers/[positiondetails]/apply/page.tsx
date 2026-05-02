import React from "react";
import { notFound } from "next/navigation";
import ApplyForm from "../includes/ApplyForm";
import jobsData from "@/app/data/jobs.json";

const jobs = jobsData;

const getJobById = (id: string) => {
    return jobs.find((job) => job.id === id);
};

interface PageProps {
    params: Promise<{
        positiondetails: string;
    }>;
}

export default async function Page({ params }: PageProps) {
    const { positiondetails } = await params;
    const job = getJobById(positiondetails);

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen overflow-hidden bg-[#f7fbfc] pb-10 md:pb-20">
            <ApplyForm job={job} />
        </div>
    );
}
