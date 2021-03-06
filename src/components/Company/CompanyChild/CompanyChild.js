import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
const CompanyChild = (props) => {
    const { Model, Slugmake, Slugmodel } = props.company;
    const history = useHistory()
    const nextPage = () => {

        history.push(`/make/${Slugmake}/${Slugmodel}`)

    }


    //ekn array of object k theke just model ta ber kortesi
    // const modelList = props.uniquemodelList.filter((x, i, a) => a.indexOf(x) === i)


    return (
        <>
            <div className="item">


                <Button className="btn-make-name text-dark" onClick={nextPage} variant="outline-secondary"><Icon icon="ph:arrow-fat-lines-right-fill" /> {Model}</Button>


            </div>
        </>
    );
};

export default CompanyChild;