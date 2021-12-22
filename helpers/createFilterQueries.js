module.exports = function createFilterQueries(
  expertise,
  companyType,
  revenueRanges,
  sizeRanges,
  locations,
  diversity,
  csr,
  companyHQ,
  foundationYear,
  parentOrganisation,
  replacements
) {
  const queries = {};

  queries.expertiseQuery = '';
  if (expertise[0] !== '') {
    let tagsString = '';
    expertise.forEach((tag, index) => {
      if (index !== expertise.length - 1) {
        tagsString += ` ?,`;
      } else {
        tagsString += ` ?`;
      }
      replacements.push(tag);
    });
    queries.expertiseQuery = `AND string_to_array(expertise, ', ') @> ARRAY[${tagsString}]`;
  }

  queries.companyTypeQuery = '';
  if (companyType[0] !== '') {
    queries.companyTypeQuery = `AND \n(`;
    companyType.forEach((type, index) => {
      if (index !== companyType.length - 1) {
        queries.companyTypeQuery += ` "type" LIKE ? OR`;
      } else {
        queries.companyTypeQuery += ` "type" LIKE ? )`;
      }
      replacements.push(`%${type}%`);
    });
  }

  queries.companyRevenueQuery = '';
  if (revenueRanges) {
    queries.companyRevenueQuery = `AND \n(`;
    revenueRanges.forEach((range, index) => {
      if (index !== revenueRanges.length - 1) {
        queries.companyRevenueQuery += ` "revenue" BETWEEN ? AND ? OR`;
        replacements.push(`${range[0]}`);
        replacements.push(`${range[1]}`);
      } else {
        queries.companyRevenueQuery += ` "revenue" BETWEEN ? AND ? )`;
        replacements.push(`${range[0]}`);
        replacements.push(`${range[1]}`);
      }
    });
  }

  queries.companySizeQuery = '';
  if (sizeRanges) {
    queries.companySizeQuery = `AND \n(`;
    sizeRanges.forEach((range, index) => {
      if (index !== sizeRanges.length - 1) {
        queries.companySizeQuery += ` "employeesCount" BETWEEN ? AND ? OR`;
        replacements.push(`${range[0]}`);
        replacements.push(`${range[1]}`);
      } else {
        queries.companySizeQuery += ` "employeesCount" BETWEEN ? AND ? )`;
        replacements.push(`${range[0]}`);
        replacements.push(`${range[1]}`);
      }
    });
  }

  queries.diversityQuery = '';
  if (diversity[0] !== '') {
    queries.diversityQuery = `AND \n(`;
    if (diversity.length === 1) {
      queries.diversityQuery += `${
        diversity[0] === 'Female CEO'
          ? `"hasFemaleCEO"`
          : `"hasUderrepresentedMinorities"`
      } = 'true')`;
    } else {
      queries.diversityQuery += `"hasFemaleCEO" = 'true' AND "hasUderrepresentedMinorities" = 'true')`;
    }
  }

  queries.csrQuery = '';
  if (csr[0] !== '') {
    let csrString = '';
    csr.forEach((tag, index) => {
      if (index !== csr.length - 1) {
        csrString += ` ?,`;
      } else {
        csrString += ` ?`;
      }
      replacements.push(tag);
    });

    queries.csrQuery = `AND string_to_array(csr, ', ') @> ARRAY[${csrString}]`;
  }

  queries.companyHQQuery = '';
  if (companyHQ !== '') {
    replacements.push(companyHQ);
    queries.companyHQQuery = `AND "HQLocation" = ?`;
  }

  queries.foundationYear = '';
  if (foundationYear !== '') {
    replacements.push(foundationYear);
    queries.foundationYear = `AND "yearOfFoundation" = ?`;
  }

  queries.parentOrganisation = '';
  if (parentOrganisation !== '') {
    replacements.push(parentOrganisation);
    queries.parentOrganisation = `AND "parentCompany" = ?`;
  }

  queries.locationsQuery = '';

  if (locations[0] !== '') {
    queries.locationsQuery = `AND \n(`;
    locations.forEach((location, index) => {
      const parsedLocation = location.split('|');
      if (parsedLocation.length === 3) {
        const parsedLocationString = `${parsedLocation[0]} -- ${parsedLocation[1]} -- ${parsedLocation[2]}`;
        if (index !== locations.length - 1) {
          queries.locationsQuery += ` "locations" LIKE ? OR`;
        } else {
          queries.locationsQuery += ` "locations" LIKE ? )`;
        }
        replacements.push(`%${parsedLocationString}%`);
      } else {
        const parsedLocationString = `${parsedLocation[0]}`;
        if (index !== locations.length - 1) {
          queries.locationsQuery += ` "locations" LIKE ? OR`;
        } else {
          queries.locationsQuery += ` "locations" LIKE ? )`;
        }
        replacements.push(`%${parsedLocationString}%`);
      }
    });
  }

  return queries;
};
