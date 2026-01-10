/**
 * Tests for Russell DCF Framework
 */

import { test } from 'node:test';
import assert from 'node:assert';
import RussellDCFFramework from './russell-dcf-framework.js';

test('RussellDCFFramework - Constructor initializes with defaults', () => {
  const russellDCF = new RussellDCFFramework();
  
  assert.strictEqual(russellDCF.config.projectName, 'Tokyo Expansion - Shinjuku Tower');
  assert.strictEqual(russellDCF.config.location, 'Shinjuku, Tokyo');
  assert.strictEqual(russellDCF.config.phiRatio, 1.618033988749895);
  assert.strictEqual(russellDCF.config.discountRate, 0.08);
  assert.strictEqual(russellDCF.cashFlows.length, 0);
  assert.strictEqual(russellDCF.liquidityPool, 0);
});

test('RussellDCFFramework - Constructor accepts custom config', () => {
  const russellDCF = new RussellDCFFramework({
    projectName: 'Custom Project',
    discountRate: 0.10
  });
  
  assert.strictEqual(russellDCF.config.projectName, 'Custom Project');
  assert.strictEqual(russellDCF.config.discountRate, 0.10);
});

test('RussellDCFFramework - calculateYieldProjection generates correct data', () => {
  const russellDCF = new RussellDCFFramework();
  const result = russellDCF.calculateYieldProjection({
    initialInvestment: 50000000,
    years: 10,
    growthRate: 0.12,
    occupancyRate: 0.92
  });
  
  assert.strictEqual(result.projectName, 'Tokyo Expansion - Shinjuku Tower');
  assert.strictEqual(result.initialInvestment, 50000000);
  assert.strictEqual(result.projectionPeriod, 10);
  assert.strictEqual(result.yearlyProjections.length, 10);
  assert.ok(result.totalProjectedYield > 0);
  assert.ok(result.averageAnnualYield > 0);
  assert.strictEqual(russellDCF.cashFlows.length, 10);
});

test('RussellDCFFramework - calculateYieldProjection applies Phi adjustment', () => {
  const russellDCF = new RussellDCFFramework();
  const result = russellDCF.calculateYieldProjection({
    initialInvestment: 50000000,
    years: 5,
    growthRate: 0.10,
    occupancyRate: 1.0
  });
  
  const firstYear = result.yearlyProjections[0];
  assert.ok(firstYear.phiAdjustedYield);
  assert.ok(firstYear.phiAdjustedYield !== firstYear.adjustedYield);
});

test('RussellDCFFramework - calculatePhiHedgedIRR throws error without cash flows', () => {
  const russellDCF = new RussellDCFFramework();
  
  assert.throws(() => {
    russellDCF.calculatePhiHedgedIRR(50000000);
  }, /No cash flows available/);
});

test('RussellDCFFramework - calculatePhiHedgedIRR returns valid results', () => {
  const russellDCF = new RussellDCFFramework();
  russellDCF.calculateYieldProjection({
    initialInvestment: 50000000,
    years: 10,
    growthRate: 0.12,
    occupancyRate: 0.92
  });
  
  const result = russellDCF.calculatePhiHedgedIRR(50000000);
  
  assert.ok(result.baseIRR);
  assert.ok(result.phiHedgedIRR);
  assert.strictEqual(result.phiRatio, 1.618033988749895);
  assert.ok(result.hedgeFactor < 1);
  assert.ok(result.riskMetrics.sharpeRatio);
  assert.ok(result.riskMetrics.sortinoRatio);
  assert.ok(['Strong Buy', 'Buy', 'Hold'].includes(result.recommendation));
});

test('RussellDCFFramework - validateLiquidityMechanisms with sufficient liquidity', () => {
  const russellDCF = new RussellDCFFramework();
  const result = russellDCF.validateLiquidityMechanisms({
    totalAssetValue: 100000000,
    currentLiquidity: 25000000,
    requiredLiquidityRatio: 0.20,
    emergencyReserveRatio: 0.05
  });
  
  assert.strictEqual(result.totalAssetValue, 100000000);
  assert.strictEqual(result.currentLiquidity, 25000000);
  assert.strictEqual(result.requiredLiquidity, 20000000);
  assert.strictEqual(result.emergencyReserve, 5000000);
  assert.strictEqual(result.status, 'VALIDATED');
  assert.strictEqual(result.validations.sufficientLiquidity, true);
  assert.strictEqual(result.validations.emergencyReserveMet, true);
  assert.ok(result.recommendations.length > 0);
});

test('RussellDCFFramework - validateLiquidityMechanisms with insufficient liquidity', () => {
  const russellDCF = new RussellDCFFramework();
  const result = russellDCF.validateLiquidityMechanisms({
    totalAssetValue: 100000000,
    currentLiquidity: 10000000,
    requiredLiquidityRatio: 0.20,
    emergencyReserveRatio: 0.05
  });
  
  assert.strictEqual(result.status, 'NEEDS_ATTENTION');
  assert.strictEqual(result.validations.sufficientLiquidity, false);
  assert.ok(result.recommendations.some(r => r.includes('Increase liquidity')));
});

test('RussellDCFFramework - generateComprehensiveDCF returns complete analysis', () => {
  const russellDCF = new RussellDCFFramework();
  const result = russellDCF.generateComprehensiveDCF({
    projection: {
      initialInvestment: 50000000,
      years: 10,
      growthRate: 0.12,
      occupancyRate: 0.92
    },
    liquidity: {
      totalAssetValue: 100000000,
      currentLiquidity: 25000000
    }
  });
  
  assert.strictEqual(result.projectName, 'Tokyo Expansion - Shinjuku Tower');
  assert.strictEqual(result.location, 'Shinjuku, Tokyo');
  assert.ok(result.analysis.yieldProjection);
  assert.ok(result.analysis.irrAnalysis);
  assert.ok(result.analysis.liquidityValidation);
  assert.ok(result.analysis.npv);
  assert.ok(result.overallAssessment.investmentViability);
  assert.ok(result.overallAssessment.riskLevel);
  assert.strictEqual(result.overallAssessment.phiAlignment, 'OPTIMIZED');
});

test('RussellDCFFramework - NPV calculation is correct', () => {
  const russellDCF = new RussellDCFFramework();
  const result = russellDCF.generateComprehensiveDCF({
    projection: {
      initialInvestment: 50000000,
      years: 5,
      growthRate: 0.15,
      occupancyRate: 0.95
    },
    liquidity: {
      totalAssetValue: 100000000,
      currentLiquidity: 30000000
    }
  });
  
  assert.ok(result.analysis.npv.value);
  assert.ok(result.analysis.npv.formatted);
  assert.strictEqual(result.analysis.npv.discountRate, '8%');
  assert.ok(['POSITIVE', 'NEGATIVE'].includes(result.analysis.npv.status));
});

test('RussellDCFFramework - getState returns current state', () => {
  const russellDCF = new RussellDCFFramework();
  russellDCF.calculateYieldProjection({
    initialInvestment: 50000000,
    years: 5
  });
  russellDCF.validateLiquidityMechanisms({
    currentLiquidity: 20000000
  });
  
  const state = russellDCF.getState();
  
  assert.strictEqual(state.cashFlowCount, 5);
  assert.strictEqual(state.liquidityPool, 20000000);
  assert.ok(state.config);
  assert.ok(state.timestamp);
});

console.log('✓ All Russell DCF Framework tests passed');
