import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Community } from '../../interfaces/population.interface';

@Component({
  selector: 'app-provinces',
  templateUrl: './population.component.html',
})
export class PopulationPageCopyComponent implements OnInit {
  communities: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCommunitiesAndProvinces();
  }

  getCommunitiesAndProvinces(): void {
    this.http.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-spain-provincia&rows=100')
      .subscribe((data: any) => {
        this.communities = this.transformData(data.records);
      });
  }

 transformData(records: any[]): Community[] {
  const result: Community[] = [];

  records.forEach(record => {
    const communityName = record.fields.acom_name;
    const provinceName = record.fields.prov_name;
    const population = record.fields.population;

    let community = result.find(c => c.name === communityName);

    if (!community) {
      community = { name: communityName, provinces: [], showProvinces: false };
      result.push(community);
    }

    community.provinces.push({ name: provinceName, population });
  });

  return result;
}

  toggleProvinces(community: any): void {
    community.showProvinces = !community.showProvinces;
  }
}
