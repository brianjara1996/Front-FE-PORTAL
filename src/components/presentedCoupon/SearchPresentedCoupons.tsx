import React, { useState } from "react";
import { searchCoupons } from "../../services/couponService/CouponService";
import Hr from "../hr/Hr";
import './SearchPresentedCoupons.css'
import { GetSearchCouponsVisaRequest } from "../../services/couponService/model/model";
import { Button, Datepicker, Provider, Select, TextInput } from '@orbita-ui/core';
import { CSSReset } from '../../config/CSSReset';
import { Table } from '@orbita-ui/core';

const SearchPresentedCoupons = () => {
    const [enableView, setEnableView] = useState(false);
    const [rows, setRows] = useState<[any]>([{ id: 1 }]);

    const [accountNumber, setAccountNumber] = useState('');
    const [authorizationCode, setAuthorizationCode] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [merchantName, setMerchantName] = useState('');
    const [arn, setArn] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [orderBy, setOrderBy] = useState('');
    const [typeOrder, setTypeOrder] = useState('');
    const [filterDate, setFilterDate] = useState('PRESENTATION_DATE');
    const [dateFrom, setDateFrom] = useState<any>(restarDias(new Date(), 91));
    const [dateTo, setDateTo] = useState<any>(restarDias(new Date(), 1));
    const [inSearch, setInSearch] = useState(false);

    function filterValue(value: any) {
        if (value != '')
            return value
        else
            return null
    }

    function getDate(date: any) {
        try {
            return date.getFullYear() + "-" + ('00' + (date.getMonth() + 1)).slice(-2) + "-" + ('00' + date.getDate()).slice(-2);
        } catch (e) {
            return date;
        }
    }

    function find(event: any) {
        setInSearch(true);
        event.preventDefault();


        let request = new GetSearchCouponsVisaRequest();
        request.accountNumber = filterValue(accountNumber);
        request.authorizationCode = filterValue(authorizationCode);
        request.cardNumber = filterValue(cardNumber);
        request.merchantName = filterValue(merchantName);
        request.arn = filterValue(arn);
        request.amount = filterValue(amount);
        request.currency = filterValue(currency);
        request.orderBy = filterValue(orderBy);
        request.typeOrder = filterValue(typeOrder);
        request.filterDate = filterValue(filterDate);
        request.dateFrom = getDate(filterValue(dateFrom));
        request.dateTo = getDate(filterValue(dateTo));


        searchCoupons(request).then((r) => {
            if (r?.status == 200) {
                if (r.response.coupons != null && r.response.coupons.length > 0) {
                    setRows(r.response.coupons);
                    setEnableView(true)
                }
            }
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setInSearch(false);
        })
    }

    function restarDias(inputDate: Date, dias: number) {

        inputDate = new Date(inputDate.getFullYear(), inputDate.getMonth() + 1, inputDate.getDate());
        var calculado = new Date();
        var dateResul = inputDate.getDate() - dias;
        calculado.setDate(dateResul);
        return calculado;
    }


    return (<Provider variant="theme-prisma">
        <CSSReset />
        {
            <div className="container">
                <div className="row form-row text-form">
                    <div className="form-group col-md-2">
                        <TextInput
                            fullWidth={true}
                            label="Tarjeta"
                            placeholder=""
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <TextInput
                            fullWidth={true}
                            label="Cuenta"
                            placeholder=""
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <TextInput
                            fullWidth={true}
                            label="Establecimiento"
                            placeholder=""
                            value={merchantName}
                            onChange={(e) => setMerchantName(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <TextInput
                            fullWidth={true}
                            label="Cupón"
                            placeholder=""
                            value={arn}
                            onChange={(e) => setArn(e.target.value)}
                        />
                    </div>

                    <div className="form-group col-md-2">
                        <TextInput
                            fullWidth={true}
                            label="Código de autorización"
                            placeholder=""
                            value={authorizationCode}
                            onChange={(e) => setAuthorizationCode(e.target.value)}
                        />
                    </div>

                </div>
                <div className="row form-row text-form">
                    <div className="form-group col-md-1 vertical-align">
                        <Select
                            label="Moneda"
                            onBlur={function noRefCheck() { }}
                            fullWidth={true}
                            options={[
                                {
                                    label: 'Todas',
                                    value: ''
                                },
                                {
                                    label: 'USD',
                                    value: 'USD'
                                },
                                {
                                    label: 'ARS',
                                    value: 'ARS'
                                }

                            ]}
                            defaultValue={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            placeholder=""
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <TextInput
                            fullWidth={true}
                            label="Importe"
                            placeholder=""
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-2 vertical-align">
                        <Select
                            label="Ordenar por:"
                            onBlur={function noRefCheck() { }}
                            fullWidth={true}
                            options={[
                                {
                                    label: 'Ninguno',
                                    value: ''
                                },
                                {
                                    label: 'Presentacion',
                                    value: 'PRESENTATION_DATE'
                                },
                                {
                                    label: 'Movimiento',
                                    value: 'MOVEMENT_DATE'
                                }

                            ]}
                            defaultValue={orderBy}
                            onChange={(e) => setOrderBy(e.target.value)}
                            placeholder=""
                        />
                    </div>
                    <div className="form-group col-md-2 vertical-align">
                        <Select
                            label="Orden:"
                            onBlur={function noRefCheck() { }}
                            fullWidth={true}
                            options={[
                                {
                                    label: 'Ninguno',
                                    value: ''
                                },
                                {
                                    label: 'Ascendente',
                                    value: 'ASC'
                                },
                                {
                                    label: 'Descendente',
                                    value: 'DESC'
                                }

                            ]}
                            defaultValue={typeOrder}
                            onChange={(e) => setTypeOrder(e.target.value)}
                            placeholder=""
                        />
                    </div>

                </div>
                <div className="row form-row text-form">
                    <div className="form-group col-md-2 vertical-align">
                        <Select
                            label="Fecha:"
                            onBlur={function noRefCheck() { }}
                            fullWidth={true}
                            options={[
                                {
                                    label: 'Presentacion',
                                    value: 'PRESENTATION_DATE'
                                },
                                {
                                    label: 'Movimiento',
                                    value: 'MOVEMENT_DATE'
                                }

                            ]}
                            defaultValue={filterDate}
                            onChange={(e) => { setFilterDate(e.target.value); }}
                            placeholder=""
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <Datepicker
                            label="Desde:"
                            mode="single"
                            onBlur={function noRefCheck() { }}
                            onChange={(d) => setDateFrom(d)}
                            placeholder="DD/MM/AAAA"
                            value={dateFrom}
                            editable
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <Datepicker
                            label="Hasta:"
                            mode="single"
                            onBlur={function noRefCheck() { }}
                            onChange={(d) => setDateTo(d)}
                            placeholder="DD/MM/AAAA"
                            value={dateTo}
                            editable

                        />
                    </div>
                    <div className="form-group col-md-2 vertical-align">
                        <Button onClick={(e) => { find(e) }} disabled={inSearch} className="vertical-align">
                            <div hidden={inSearch} style={{ background: "none", border: "none" }}> Buscar</div>
                            <div className="loader" hidden={!inSearch}>

                            </div>
                        </Button>
                    </div>
                </div>
                <Hr />
                {enableView &&
                    <Table
                        columns={[
                            {
                                accessorKey: 'arn',
                                header: 'Codigo Cupon',
                                id: 'arn'
                            },
                            {
                                accessorKey: 'account_number',
                                header: 'Numero de cuenta',
                                id: 'account_number'
                            },
                            {
                                accessorKey: 'purchase_date',
                                header: 'Fecha de compra',
                                id: 'purchase_date'
                            },
                            {
                                accessorKey: 'currency',
                                header: 'Moneda',
                                id: 'currency'
                            },
                            {
                                accessorKey: 'amount',
                                header: 'Monto',
                                id: 'amount'
                            },
                            {
                                accessorKey: 'merchant_name',
                                header: 'Nombre de comercio',
                                id: 'merchant_name'
                            },
                            {
                                accessorKey: 'transaction_code',
                                header: 'Codigo de transacción',
                                id: 'transaction_code'
                            }
                        ]}
                        data={rows}
                    />}
            </div>}

    </Provider>
    );
}

export default SearchPresentedCoupons;