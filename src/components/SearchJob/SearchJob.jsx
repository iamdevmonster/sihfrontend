import React from 'react';

const SearchJob = () => {
    return (
        <form method="post" className="search-jobs-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-5">
                <div className="mb-4 sm:mb-0">
                    <select
                        className="selectpicker form-select w-full btn-white btn-lg"
                        data-live-search="true"
                        title="Select Region"
                    >
                        <option>All Over Punjab</option>
                        <option>Armitsar</option>
                        <option>Bathinda</option>
                        <option>Gurdaspur</option>
                        <option>Hoshiarpur</option>
                        <option>Freozebad</option>
                        <option>Jalndhar</option>
                    </select>
                </div>

                <div className="mb-4 sm:mb-0">
                    <select
                        className="selectpicker form-select w-full btn-white btn-lg"
                        data-live-search="true"
                        title="Job type"
                    >
                        <option>Private</option>
                        <option>Goverment</option>
                    </select>
                </div>

                <div className="mb-4 sm:mb-0">
                    <select
                        className="selectpicker form-select w-full btn-white btn-lg"
                        data-live-search="true"
                        title="Select Qualification"
                    >
                        <option>No Schooling</option>
                        <option>5th</option>
                        <option>10th</option>
                        <option>12th</option>
                        <option>Diploma After 10th</option>
                        <option>Diploma After 12th</option>
                        <option>Graduate</option>
                        <option>post Graduate</option>
                        <option>PHD</option>
                    </select>
                </div>

                <div className="mb-4 sm:mb-0">
                    <select
                        className="selectpicker form-select w-full btn-white btn-lg"
                        data-live-search="true"
                        title="Experience into year"
                    >
                        <option>No Experience</option>
                        <option>1 Experience</option>
                        <option>2 Experience</option>
                        <option>3 Experience</option>
                        <option>4 Experience</option>
                        <option>5 Experience</option>
                        <option>6 Experience</option>
                        <option>7 Experience</option>
                        <option>8 Experience</option>
                    </select>
                </div>

                <div className="mb-4 sm:mb-0">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block text-white btn-search"
                    >
                        <span className="icon-search icon mr-2"></span>Search Job
                    </button>
                </div>
            </div>

        </form>
    );
};

export default SearchJob;
