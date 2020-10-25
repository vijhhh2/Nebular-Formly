import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DatePickers } from 'projects/nebular-formly/src/public-api';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form = new FormGroup({});
  public states$ = of([
    {
      label: 'Inozemtsevo',
      value: 1,
    },
    {
      label: 'Mairana',
      value: 2,
    },
    {
      label: 'Penalva de Alva',
      value: 3,
    },
    {
      label: 'Bogdaniec',
      value: 4,
    },
    {
      label: 'Buritama',
      value: 5,
    },
    {
      label: 'Lengji',
      value: 6,
    },
    {
      label: 'Saint-Brieuc',
      value: 7,
    },
    {
      label: 'Dmytrivka',
      value: 8,
    },
    {
      label: 'Ōhara',
      value: 9,
    },
    {
      label: 'Ust’-Ilimsk',
      value: 10,
    },
    {
      label: 'Vestmanna',
      value: 11,
    },
    {
      label: 'Sibut',
      value: 12,
    },
    {
      label: 'Qingyun',
      value: 13,
    },
    {
      label: 'Suifenhe',
      value: 14,
    },
    {
      label: 'Brckovljani',
      value: 15,
    },
    {
      label: 'Labruge',
      value: 16,
    },
    {
      label: 'Datarkadu',
      value: 17,
    },
    {
      label: 'Jianchang',
      value: 18,
    },
    {
      label: 'Tomsk',
      value: 19,
    },
    {
      label: 'Verdun',
      value: 20,
    },
    {
      label: 'Jinhua',
      value: 21,
    },
    {
      label: 'Wang Noi',
      value: 22,
    },
    {
      label: 'Luyang',
      value: 23,
    },
    {
      label: 'Sioux Falls',
      value: 24,
    },
    {
      label: 'Mutis',
      value: 25,
    },
    {
      label: 'Koramlik',
      value: 26,
    },
    {
      label: 'Taurisma',
      value: 27,
    },
    {
      label: 'Sumberejo',
      value: 28,
    },
    {
      label: 'Pieńsk',
      value: 29,
    },
    {
      label: 'Beiyang',
      value: 30,
    },
    {
      label: 'Vaiamonte',
      value: 31,
    },
    {
      label: 'Oebobo',
      value: 32,
    },
    {
      label: 'Fort Wayne',
      value: 33,
    },
    {
      label: 'Lordelo',
      value: 34,
    },
    {
      label: 'Pasolapida',
      value: 35,
    },
    {
      label: 'Rasūlnagar',
      value: 36,
    },
    {
      label: 'Đưc Trọng',
      value: 37,
    },
    {
      label: 'Brits',
      value: 38,
    },
    {
      label: 'Almirante Tamandaré',
      value: 39,
    },
    {
      label: 'Sukth',
      value: 40,
    },
    {
      label: 'Dubreuil',
      value: 41,
    },
    {
      label: 'Odesskoye',
      value: 42,
    },
    {
      label: 'Candoni',
      value: 43,
    },
    {
      label: 'Zwolle',
      value: 44,
    },
    {
      label: 'Dolní Studénky',
      value: 45,
    },
    {
      label: 'Teongtoda',
      value: 46,
    },
    {
      label: 'Karangtengah Lor',
      value: 47,
    },
    {
      label: 'Shangcunba',
      value: 48,
    },
    {
      label: 'Municipio de Copacabana',
      value: 49,
    },
    {
      label: 'Pignon',
      value: 50,
    },
    {
      label: 'Naḥf',
      value: 51,
    },
    {
      label: 'Barisāl',
      value: 52,
    },
    {
      label: 'Banī Zayd',
      value: 53,
    },
    {
      label: 'Nangka',
      value: 54,
    },
    {
      label: 'Trollhättan',
      value: 55,
    },
    {
      label: 'Humniska',
      value: 56,
    },
    {
      label: 'Jinhui',
      value: 57,
    },
    {
      label: '‘Abbāsābād',
      value: 58,
    },
    {
      label: 'Banjar Madangan Kaja',
      value: 59,
    },
    {
      label: 'Sośno',
      value: 60,
    },
    {
      label: 'Honiara',
      value: 61,
    },
    {
      label: 'Gande',
      value: 62,
    },
    {
      label: 'Gendiwu',
      value: 63,
    },
    {
      label: 'Agriá',
      value: 64,
    },
    {
      label: 'Tamisan',
      value: 65,
    },
    {
      label: 'Pasirhuni',
      value: 66,
    },
    {
      label: 'Gaiyang',
      value: 67,
    },
    {
      label: 'Sidamukti',
      value: 68,
    },
    {
      label: 'Brzeszcze',
      value: 69,
    },
    {
      label: 'Dama',
      value: 70,
    },
    {
      label: 'Dobczyce',
      value: 71,
    },
    {
      label: 'Korfovskiy',
      value: 72,
    },
    {
      label: 'Machetá',
      value: 73,
    },
    {
      label: 'Mar del Plata',
      value: 74,
    },
    {
      label: 'Lazaro Cardenas',
      value: 75,
    },
    {
      label: 'Yidu',
      value: 76,
    },
    {
      label: 'President Roxas',
      value: 77,
    },
    {
      label: 'La Estancia',
      value: 78,
    },
    {
      label: 'Sámara',
      value: 79,
    },
    {
      label: 'Tangga’an',
      value: 80,
    },
    {
      label: 'Rennes',
      value: 81,
    },
    {
      label: 'Dongming',
      value: 82,
    },
    {
      label: 'Balitoc',
      value: 83,
    },
    {
      label: 'Fraile Pintado',
      value: 84,
    },
    {
      label: 'Samur',
      value: 85,
    },
    {
      label: 'New Glasgow',
      value: 86,
    },
    {
      label: 'Mūḩ Ḩasan',
      value: 87,
    },
    {
      label: 'Mhlume',
      value: 88,
    },
    {
      label: 'New York City',
      value: 89,
    },
    {
      label: 'Zhongfan',
      value: 90,
    },
    {
      label: 'Svecha',
      value: 91,
    },
    {
      label: 'Messejana',
      value: 92,
    },
    {
      label: 'Weihai',
      value: 93,
    },
    {
      label: 'Alpiarça',
      value: 94,
    },
    {
      label: 'Dolní Studénky',
      value: 95,
    },
    {
      label: 'Tulsa',
      value: 96,
    },
    {
      label: 'Cambuga',
      value: 97,
    },
    {
      label: 'Gyamco',
      value: 98,
    },
    {
      label: 'Energodar',
      value: 99,
    },
    {
      label: 'Camacha',
      value: 100,
    },
  ]);
  public model = {
    email: '',
    type: ['Temporary', 'Ordinary'],
    type2: 'captain_america',
  };
  public radioOptions$ = of([
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ]);

  public selectOptions$ = of([
    { value: 'Temporary', label: 'Temporary' },
    { value: 'Permanent', label: 'Permanent' },
    { value: 'Ordinary', label: 'Ordinary' },
    { value: 'Not-Ordinary', label: 'Not Ordinary' },
  ]);

  public selectOptions3$ = of([
    { label: 'Iron Man', id: 'iron_man', gender: 'Male', disabled: true },
    { label: 'Captain America', id: 'captain_america', gender: 'Male' },
    {
      label: 'Black Widow',
      id: 'black_widow',
      gender: 'Female',
      disabled: true,
    },
    { label: 'Hulk', id: 'hulk', gender: 'Male' },
    {
      label: 'Captain Marvel',
      id: 'captain_marvel',
      gender: 'Female',
      disabled: true,
    },
  ]);

  public fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
    {
      key: 'acceptTerms',
      type: 'checkbox',
      templateOptions: {
        checkboxMessage: 'Accept license and agreement',
        required: true,
      },
      validators: {
        validation: ['checked'],
      },
    },
    {
      key: 'sex',
      type: 'radio',
      templateOptions: {
        name: 'sex1',
        label: 'Sex',
        disabled: false, // make it true to disable it globally
        options: this.radioOptions$,
        status: 'success',
        required: true,
        arrange: 'row', // remove arrange to make options arrange column wise
      },
    },
    // {
    //   key: 'sex2',
    //   type: 'radio',
    //   templateOptions: {
    //     name: 'sex2', // Name is must and should
    //     label: 'Sex',
    //     disabled: false, // make it true to disable it globally
    //     options: this.radioOptions$,
    //     status: 'danger',
    //     required: true,
    //     arrange: 'row', // remove arrange to make options arrange column wise
    //   },
    // },
    {
      key: 'type',
      type: 'select',
      templateOptions: {
        label: 'Select Type',
        placeholder: 'Select Type',
        disabled: false,
        options: this.selectOptions$,
        required: true,
        multiple: true,
        shape: 'round',
      },
    },
    {
      key: 'type2',
      type: 'select',
      templateOptions: {
        label: 'Select Group Type',
        placeholder: 'Select Group Type',
        status: 'success',
        disabled: false,
        options: this.selectOptions3$,
        groupProp: 'gender',
        valueProp: 'id',
        labelProp: 'label',
        required: true,
        size: 'large',
        filled: true,
      },
    },
    {
      key: 'date',
      type: 'datepicker',
      templateOptions: {
        label: 'Select Date',
        placeholder: 'Select Date',
        required: true,
        pickerType: DatePickers.DATE_PICKER,
      },
    },
    {
      key: 'date2',
      type: 'datepicker',
      templateOptions: {
        label: 'Select Date',
        placeholder: 'Select Date',
        required: true,
        pickerType: DatePickers.DATE_TIME_PICKER,
      },
    },
    {
      key: 'date3',
      type: 'datepicker',
      templateOptions: {
        label: 'Select Date',
        placeholder: 'Select Date',
        required: true,
        pickerType: DatePickers.RANGE_PICKER,
      },
    },
    {
      key: 'time',
      type: 'timepicker',
      templateOptions: {
        disabled: false,
        singleColumn: true,
        step: 5,
      },
    },
    {
      key: 'check',
      type: 'toggle',
      templateOptions: {
        disabled: false,
        status: 'success',
        labelPosition: 'end',
        label: 'Check the start',
      },
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Description',
        required: true,
        fullWidth: true,
      },
    },
  ];

  public filterStates(
    term: string,
  ): Observable<{ label: string; value: string | number }[]> {
    if (!term) {
      return this.states$;
    }

    return this.states$.pipe(
      map((states) => {
        return states.filter(
          (state) => state.label.toLowerCase().indexOf(term.toLowerCase()) === 0
        );
      })
    );
  }

  public onSubmit(model: any): void {
    console.log(model);
  }
}
