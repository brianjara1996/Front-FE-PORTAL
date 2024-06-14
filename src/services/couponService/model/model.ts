class ErrorDetail {
    type!: string
    message!: string
}

export class ErrorResponse {
    code!: string
    status!: number
    title!: string
    message!: string
    instance!: string
    details!: ErrorDetail[]
}

export enum ECurrency {
    ARS = "ARS",
    USD = "USD"
}

export enum EOrderBy {
    PRESENTATION_DATE = "PRESENTATION_DATE",
    MOVEMENT_DATE = "MOVEMENT_DATE"
}

export enum EFilterDate {
    PRESENTATION_DATE = "PRESENTATION_DATE",
    MOVEMENT_DATE = "MOVEMENT_DATE"
}

export enum ETypeOrder {
    ASC = "ASC",
    DESC = "DESC"
}

export class GetSearchCouponsVisaRequest {
    cardNumber!: string;
    accountNumber!: number;
    authorizationCode!: string;
    merchantName!: string;
    arn!: string;
    amount!: number;
    currency!: ECurrency;
    dateFrom!: string;
    dateTo!: string;
    orderBy!: EOrderBy;
    typeOrder!: ETypeOrder;
    filterDate!: EFilterDate
}

export class VisaCoupon {
    id!: number;
    account_number!: number;
    card_number!: string;
    arn!: string;
    purchase_date!: Date;
    currency!: string;
    amount!: number;
    amount_usd!: number;
    merchant_name!: string;
    merchant_city!: string;
    merchant_country!: string;
    merchant_province!: string;
    merchant_category_code!: number;
    issuer_bank_code!: number;
    issuer_branch_code!: number;
    bill_cycle!: number;
    payment_date!: Date;
    authorization_code!: string;
    plan_type!: string;
    total_instalments!: number;
    instalment_number!: number;
    moto_eci!: string;
    pos_terminal_capabilitiy!: string;
    pos_entry_mode!: string;
    card_product!: string;
    card_type!: string;
    transaction_code!: string;
    merchant_number!: string;
    processing_date!: Date;
    cie_number!: string;
    cardholder_id_method_used!: string;
    terminal_id!: string;
    cashback_amount!: number;
    cardholder_activated_terminal_indicator!: string;
    merchant_zip_code!: string;
    reimbursement_attribute!: string;
    pos_environment!: string;
    original_cp_date!: string;
    transaction_id!: string;
    no_show_indicator!: string;
    clean_summary_indicator!: string;
    mvv!: string;
    product_id!: string;
    multiple_clearing_seq_number!: string;
    multiple_clearing_seq_count!: string;
    surcharge_amount!: number;
    surcharge_indicator!: string;
    instalment_type!: string;
    acquirer_indicator!: string;
    cvm_limit_indicator!: string;
    total_amount!: number;
    instalment_numbererest!: number;
    vat_numbererest_amount!: number;
    risk_fee_amount!: number;
    vat_risk_fee_amount!: number;
    irf_indicator!: string;
    settlement_indicator!: string;
    deferred_settlement_date!: number;
    tip_amount!: number;
    irf_amount!: number;
    vat_irf_amount!: number;
    promotion_indicator!: string;
    promotion_id!: string;
    user_discount_percentage!: number;
    merchant_discount_percentage!: number;
    campaing_bank_code!: string;
    promotion_rest!: string;
    merchant_bank_code!: string;
    financial_indicator!: string;
    token_level!: string;
    token_requestor_id!: string;
    pan_token!: string;
    mail_phone_indicator!: string;
    auth_source_code!: string;
    dcc_indicator!: string;
    automatic_debit_client_id!: string;
    fee_program_indicator!: string;
    wallet_id!: string;
    oct_transaction_indicator!: string;
    bai_code!: string;
    vat_rate!: number;
    merchant_volume_indicator!: string;
    interchange_fee_amount!: number;
    interchange_fee_amount_sign!: number;
}

export interface GetSearchCouponsVisaResponse {
    coupons: [VisaCoupon];
}

export interface GridColDef {
    field: string;
}
