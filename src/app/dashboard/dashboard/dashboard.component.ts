import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  data1: any;

    constructor() {
        this.data = {
            labels: ['Mopeia', 'Morrumbala', 'Derre', 'Maganja da Costa', 'Milange', 'Molumbo'],
            datasets: [
                {
                    label: 'Total de alertas vermelhas',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

        this.data1 = {
          labels: ['sopMixFor75Nao', 'sopEnxaugou3vezesNao', 'sopTemEPICompletoNao',
               'sopPulvComBombaComCntFluxoNao', 'todosPertencesForaCasaNao',
                'todosPertencesNTiradosCobertosNao', 'existeVazamentoBombaSim',
                'sopPulvComDist45cmParedeNao', 'sopMantemVelocCorrectaNao', 'existeSubreposicao5cmNao'],
          datasets: [
              {
                  label: 'Alertas vermelhas por Indicador',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data: [65, 59, 80, 81, 56, 55, 40, 30, 17, 70]
              }
          ]
      };
      }

  ngOnInit() {
  }

}
