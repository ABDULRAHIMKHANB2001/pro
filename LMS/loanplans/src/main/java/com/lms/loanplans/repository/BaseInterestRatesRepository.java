package com.lms.loanplans.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.lms.loanplans.entities.BaseInterestRates;

@Repository 
public interface BaseInterestRatesRepository extends JpaRepository<BaseInterestRates, Integer> {
    BaseInterestRates findByLoanType(String loanType);
}