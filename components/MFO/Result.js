import useResultStore from '@hooks/store/useResultStore';
import React from 'react';

const sum = (prev, curr) => prev + curr

const Result = props => {
    const { incentives, incorporated } = useResultStore(state => state)

    const result = React.useMemo(() => {
        const incentivesSum = Object.values(incentives).reduce(sum, 0)
        const incorporatedSum = Object.values(incorporated).reduce(sum, 0)
        let total = 0

        if (!isNaN(incentivesSum) && !isNaN(incorporatedSum)) {
            total = parseFloat(incentivesSum + incorporatedSum).toFixed(2)
        } else {
            return total
        }


        if (total > 0) {
            if (total >= 2.51) {
                if (total <= 5) {
                    return total
                } else {
                    return 5
                }
            } else {
                return total
            }
        } else {
            return '-'
        }

    }, [incentives, incorporated])

    const remark = React.useMemo(() => {
        if (result > 0 && result < 1.5) {
            return 'Needs Development'
        } else if (result > 1.5 && result < 2.5) {
            return 'Needs Mentoring'
        } else if (result > 2.5 && result < 3.5) {
            return 'Satisfactory'
        } else if (result > 3.5 && result < 4.5) {
            return 'Very Satisfactory'
        } else if (result > 4.5) {
            return 'Outstanding'
        } else {
            console.error(`Something went wrong in computing the result's remark`)
            return '-'
        }

    }, [result])

    return(
        <div style={{ width: '100%' }} className="border p-5 rounded">
            <h1>Results</h1>
            <h4>{`Final Average Rating: ${result}`}</h4>
            <h4>{`Final Average Remark: ${remark}`}</h4>
        </div>
    );
}

export default Result