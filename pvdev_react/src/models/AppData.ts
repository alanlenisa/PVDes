export default interface AppData{
	kwh_gg:number;
	gg_needed: number;

	w_inverter: number;
	v_plant: number;

	percent_battery_max: number;

	calc_kwh_tot?: number;
	calc_kwh_year?: number;

	calc_a_max_adj?: number;
	calc_a_avj?: number;
}

export const emptyData:AppData = {
    kwh_gg: 2.5,
    gg_needed: 1,
    w_inverter: 500,
    v_plant: 12,
    percent_battery_max: 50
}