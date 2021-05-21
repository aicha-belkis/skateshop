import React from 'react';
import '../product/product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';


const pageSize = [5, 10, 20, 30, 40, 50];

const Pagination = ({ options: { limit = 10, page = 1, totalCount = 0 }, onChange }) => {
    const totalPage = parseInt(totalCount / limit) + (parseInt(totalCount % limit) > 0),
        disableNext = page === totalPage,
        disablePrevious = page === 1;

    return (
        <div className="pagination">
            <div className="wrapper">
                <label>Items per Page:</label>
                <select
                    type="select"
                    name="pageSize"
                    value={limit}
                    onChange={({ currentTarget: { value } }) => {
                        onChange({ limit: parseInt(value), page: 1 });
                    }}>
                    {pageSize.map((v, i) => (
                        <option key={i} value={v}>{v}</option>
                    ))}
                </select>
                <span>{`${page} - ${totalPage} of ${totalCount}`}</span>
                <FontAwesomeIcon
                    className={`action-icon first ${disablePrevious && 'disabled'}`}
                    icon={faStepBackward}
                    title="First"
                    onClick={(e => { !disablePrevious && onChange({ page: 1 }) })}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                    className={`action-icon prev ${disablePrevious && 'disabled'}`}
                    icon={faChevronLeft}
                    title="Prev"
                    onClick={e => !disablePrevious && onChange({ page: page - 1 })}
                ></FontAwesomeIcon>

                <FontAwesomeIcon
                    className={`action-icon next ${disableNext && 'disabled'}`}
                    icon={faChevronRight}
                    title="Next"
                    onClick={e => !disableNext && onChange({ page: page + 1 })}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                    className={`action-icon last ${disableNext && 'disabled'}`}
                    icon={faStepForward}
                    title="Last"
                    disabled={disableNext}
                    onClick={(e => { !disableNext && onChange({ page: totalPage }) })}
                ></FontAwesomeIcon>
            </div>
        </div>
    )
}
export default Pagination;