import React from 'react';
import _ from 'lodash';

import TargetField from './TargetField';
import BaseInputField from './BaseInputField';
import RateField from './RateField';
import ActualField from './ActualField';
import QETAComponent from '../QETA';

import { 
    Input, 
    Label,
    InputGroup, 
    InputGroupText, 
} from 'reactstrap';
import useMFOMonitor from '@hooks/store/useMFOMonitor';
import useResultStore from '@hooks/store/useResultStore';
import usePermission from '@hooks/usePermission';

// MFO FORM
const MFO = (props) => {
    const {
        field,
        type,
        index,
        mfoData = {
            other: {},
            data: {
                rate: null,
                target: null,
                actual: null,
                percentage: null,
                "dep-total": null,
            },
            total: 0,
            remarks: ''
        }, // Form's previous data
        onChange,
        percentage,
        editMode = false,
        disabled,
    } = props;

    const { setResult } = useResultStore(state => state)
    const { setAddMFOField } = useMFOMonitor(state => state);
    const [data, setData] = React.useState(mfoData?.data);
    const [other, setOther] = React.useState(mfoData?.other);
    const [total, setTotal] = React.useState(mfoData?.total);
    const [remarks, setRemarks] = React.useState(mfoData?.remarks);

    const computedResult = React.useMemo(() => 
        percentage?.applyPercentage?.(total)
    , [total, percentage]);

    const [otherKeys, setOtherKeys] = React.useState([])
    const payload = React.useMemo(() => ({
        data: { ...data },
        other: { ...other },
        remarks,
        total,
    }), [data, other, total, remarks]);

    const isFieldsCompleted = React.useMemo(() => {
        let isOtherFilled = true;
        
        if (otherKeys.length) {
            isOtherFilled = otherKeys.some(key => 
                key === 'Target' || !_.isEmpty(other?.[key]?.toString?.())
            );
        }
        
        const isDataFilled = 
            (data?.target && data?.target !== 0) && 
            (data?.actual && data?.actual !== 0)

        return Boolean(isOtherFilled && isDataFilled);
    }, [otherKeys, data, other]);

    const isIncentiveTotal = percentage?.type === 'Incentives';

    const handleChange = (type, _for) => (value) => {
        if (_for === 'other') {
            setOther(other => ({
                ...other,
                [type]: value,
            }));
        } else {
            setData(data => ({
                ...data,
                [type]: value
            }));
        }
	}

    const handleQetaValue = (qetaType) => {
        const value = field.for === qetaType 
            ? data?.rate 
            : other?.[qetaType];

        return value;
    }

    React.useEffect(() => {
        if (!_.isEqual(mfoData, payload)) {
            onChange?.({ ...payload });
        }
    }, [payload]);

    // Collects other-field keys
    React.useEffect(() => {
        field.other_fields?.forEach((otherField) => {
            setOtherKeys(otherKeys => [...otherKeys, otherField?.for || otherField.key]);
        })
    }, [field.other_fields]);

    React.useEffect(() => {
        if (type && field) {
            setAddMFOField(`${type}-${field.title}`, isFieldsCompleted);
        }

    }, [isFieldsCompleted, type, field]);

    React.useEffect(() => {
        setResult(
            percentage?.type?.toLowerCase(),
            percentage?.type + index,
            computedResult
        )
    },[percentage, computedResult])

    return(
        <div>
            <div className='mfo-form-content-box'>
                <div style={{ width: '300px '}}>
                    <small className='m-0 p-0'>{field.title}</small>
                    {field?.subtitle && <small className='text-red display-block'>{ field?.subtitle }</small>}
                </div>
                <div style={{ width: '400px '}} className="d-flex flex-column justify-content-around">
                    {field.other_fields?.map?.((other_field, otherIndex) => {
                        const type = other_field?.for === "Target" ? "dep-total" : other_field.key;
                        const isOtherType = type !== "dep-total";
                        const id = `${field.title}-${type}`

                        return (
                            <BaseInputField
                                disabled={disabled}
                                id={id}
                                key={id}
                                DOMValues={other_field?.dom?.contents?.[other_field?.key]?.values}
                                onChange={handleChange(type, isOtherType && "other")}
                                value={isOtherType ? mfoData?.other?.[other_field.key] : data['dep-total']}
                                placeHolder={other_field.title}
                            />
                        )
                    })}
                    <TargetField 
                        disabled={disabled}
                        // id={`MFO-FIELD-TARGET-${index}`}
                        id={`${field.title}-target`}
                        DOMValues={field?.dom?.contents?.[field?.for]?.values} 
                        dependencyTotalNumber={data["dep-total"]}
                        value={data.target} 
                        onDepTotalChange={handleChange("percentage")}
                        onChange={handleChange('target')}
                    />
                    <ActualField 
                        disabled={disabled}
                        // id={`MFO-FIELD-ACTUAL-${index}`}
                        id={`${field.title}-actual`}
                        DOMValues={field?.dom?.contents?.[field?.for]?.values} 
                        value={data.actual} 
                        onChange={handleChange('actual')}	
                    />
                    <RateField 
                        // id={`MFO-FIELD-RATE-${index}`}
                        id={`${field.title}-rate`}
                        target={data.percentage ?? data.target} 
                        actual={data.actual}
                        onChange={handleChange('rate')}
                    />
                    <Label size='sm' for={'remarks' + field.title}>Remarks</Label>
                    <InputGroup>
                        <Input 
                            id={'remarks' + field.title}
                            type="textarea"
                            disabled={disabled}
                            value={remarks}
                            onChange={e => setRemarks(e.target.value)}
                        />
                    </InputGroup>
                    <br/>
                    <QETAComponent
                        quality={handleQetaValue('Quality')}
                        efficiency={handleQetaValue('Effectiveness')}
                        timeliness={handleQetaValue('Timeliness')}
                        onAverageChange={setTotal}
                    />
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Total With {isIncentiveTotal ? "Incentives" : "Incorporated Percentage"}: 
                        </InputGroupText>
                        <Input 
                            disabled
                            value={computedResult}
                        />
                    </InputGroup>
                    <br/>
                </div>
                <div className='display-flex flex-column grow-2' style={{ width: '300px '}}>
                    {/* DOM */}
                    {Object.keys(field?.dom?.contents || {}).map((key, domIndex) => (
                        <React.Fragment key={`DOM-${index}${domIndex}`}>
                            <div>
                                <h5>{field?.dom?.contents[key].label}</h5>
                                {field?.dom?.contents[key].values.map((dom, valueIndex) => (
                                    <h5 key={valueIndex+dom.label}>{dom.label} = {parseFloat(dom.value).toFixed(2)}</h5>
                                ))}
                            </div>
                            <hr/>
                        </React.Fragment>
                    ))}
                    {field?.other_fields?.map((otherField, otherDomIndex) => (
                        <div key={`DOM-OTHER-${index}${otherDomIndex}`}>
                            {Object.keys(otherField?.dom?.contents || {}).map((key, domIndex) => (
                                <React.Fragment key={`DOM-OTHER-${index}${otherDomIndex}${domIndex}`}>
                                    <div>
                                        <h5>{otherField?.dom?.contents[key].label}</h5>
                                        {otherField?.dom?.contents[key].values.map((dom, valueIndex) => (
                                            <h5 key={domIndex + '' +valueIndex+dom.label}>{dom.label} = {parseFloat(dom.value).toFixed(2)}</h5>
                                        ))}
                                    </div>
                                    <hr/>
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MFO;