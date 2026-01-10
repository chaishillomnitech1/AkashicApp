/**
 * Tests for Harlem 4K AR Render Activation
 */

import { test } from 'node:test';
import assert from 'node:assert';
import Harlem4KARRender from './harlem4k-ar-render.js';

test('Harlem4KARRender - Constructor initializes with defaults', () => {
  const harlemAR = new Harlem4KARRender();
  
  assert.strictEqual(harlemAR.config.targetAudience, 38000000);
  assert.strictEqual(harlemAR.config.resolution, '4K');
  assert.strictEqual(harlemAR.config.renderEngine, 'Gemini-AI');
  assert.strictEqual(harlemAR.config.zakatFlowEnabled, true);
  assert.strictEqual(harlemAR.engagementMetrics.totalReach, 0);
  assert.strictEqual(harlemAR.engagementMetrics.activeUsers, 0);
  assert.strictEqual(harlemAR.engagementMetrics.zakatContributions, 0);
});

test('Harlem4KARRender - Constructor accepts custom config', () => {
  const harlemAR = new Harlem4KARRender({
    targetAudience: 50000000,
    zakatFlowEnabled: false
  });
  
  assert.strictEqual(harlemAR.config.targetAudience, 50000000);
  assert.strictEqual(harlemAR.config.zakatFlowEnabled, false);
});

test('Harlem4KARRender - initializeGeminiRenderer returns correct config', async () => {
  const harlemAR = new Harlem4KARRender();
  const result = await harlemAR.initializeGeminiRenderer();
  
  assert.strictEqual(result.status, 'initialized');
  assert.strictEqual(result.config.resolution.width, 3840);
  assert.strictEqual(result.config.resolution.height, 2160);
  assert.strictEqual(result.config.aiModel, 'gemini-pro-vision');
  assert.strictEqual(result.config.framerate, 60);
  assert.strictEqual(result.config.colorDepth, 10);
  assert.strictEqual(result.capabilities.realTimeRendering, true);
  assert.strictEqual(result.capabilities.aiEnhancement, true);
  assert.strictEqual(result.capabilities.arSupport, true);
});

test('Harlem4KARRender - calculateZakatFlow calculates correctly', () => {
  const harlemAR = new Harlem4KARRender();
  const result = harlemAR.calculateZakatFlow(100000);
  
  assert.strictEqual(result.total, 100000);
  assert.strictEqual(result.zakatRate, 0.025);
  assert.strictEqual(result.distribution.zakatAmount, 2500);
  assert.strictEqual(result.distribution.mainAmount, 97500);
  assert.strictEqual(result.distribution.beneficiaries.community, 1000);
  assert.strictEqual(result.distribution.beneficiaries.education, 750);
  assert.strictEqual(result.distribution.beneficiaries.infrastructure, 500);
  assert.strictEqual(result.distribution.beneficiaries.emergency, 250);
  assert.strictEqual(harlemAR.engagementMetrics.zakatContributions, 2500);
});

test('Harlem4KARRender - engageArchitects updates metrics', async () => {
  const harlemAR = new Harlem4KARRender();
  const result = await harlemAR.engageArchitects({
    name: 'Test Project',
    id: 'test-001'
  });
  
  assert.strictEqual(result.engagement.projectName, 'Test Project');
  assert.strictEqual(result.engagement.renderQuality, '4K-HDR');
  assert.strictEqual(result.engagement.geminiEnhancement, true);
  assert.strictEqual(result.zakatIntegrated, true);
  assert.ok(result.engagement.architectsReached > 0);
  assert.ok(harlemAR.engagementMetrics.totalReach > 0);
});

test('Harlem4KARRender - generateARVisualization creates valid data', () => {
  const harlemAR = new Harlem4KARRender();
  const result = harlemAR.generateARVisualization({
    name: 'Test Building',
    floors: 10,
    height: 100,
    type: 'Commercial'
  });
  
  assert.ok(result.visualizationId);
  assert.strictEqual(result.specs.name, 'Test Building');
  assert.strictEqual(result.render.resolution, '3840x2160');
  assert.strictEqual(result.render.format, 'HDR10');
  assert.strictEqual(result.render.layers.structure, true);
  assert.strictEqual(result.render.geminiEnhancements.intelligentLighting, true);
  assert.strictEqual(result.interactivity.rotation, true);
});

test('Harlem4KARRender - getMetrics returns current state', () => {
  const harlemAR = new Harlem4KARRender();
  harlemAR.calculateZakatFlow(50000);
  
  const metrics = harlemAR.getMetrics();
  
  assert.strictEqual(metrics.targetAudience, 38000000);
  assert.strictEqual(metrics.zakatContributions, 1250);
  assert.ok(metrics.completion);
});

console.log('✓ All Harlem 4K AR Render tests passed');
