# API Documentation

## Table of Contents
- [Harlem 4K AR Render](#harlem-4k-ar-render)
- [Russell DCF Framework](#russell-dcf-framework)

---

## Harlem 4K AR Render

### Overview
The Harlem 4K AR Render activation engages 38M architects using Gemini-powered 4K visuals with integrated Zakat flow logic for ethical financial distribution.

### Class: `Harlem4KARRender`

#### Constructor
```javascript
const harlemAR = new Harlem4KARRender(config);
```

**Parameters:**
- `config` (Object, optional):
  - `targetAudience` (number): Target number of architects (default: 38000000)
  - `resolution` (string): Render resolution (default: '4K')
  - `renderEngine` (string): AI engine (default: 'Gemini-AI')
  - `zakatFlowEnabled` (boolean): Enable Zakat flow (default: true)

#### Methods

##### `initializeGeminiRenderer(visualParams)`
Initializes the Gemini-powered 4K visual rendering system.

**Parameters:**
- `visualParams` (Object, optional):
  - `resolution` (Object): Custom resolution settings
  - `framerate` (number): Target framerate
  - `colorDepth` (number): Color depth in bits
  - `hdrEnabled` (boolean): Enable HDR rendering

**Returns:** Promise<Object>
```javascript
{
  status: 'initialized',
  config: {
    resolution: { width: 3840, height: 2160 },
    aiModel: 'gemini-pro-vision',
    framerate: 60,
    colorDepth: 10,
    hdrEnabled: true,
    antiAliasing: 'MSAA-8x'
  },
  capabilities: {
    realTimeRendering: true,
    aiEnhancement: true,
    arSupport: true,
    cloudSync: true
  }
}
```

##### `calculateZakatFlow(transactionAmount)`
Calculates Zakat distribution for ethical financial flow.

**Parameters:**
- `transactionAmount` (number): Base transaction amount

**Returns:** Object
```javascript
{
  total: 100000,
  distribution: {
    mainAmount: 97500,
    zakatAmount: 2500,
    beneficiaries: {
      community: 1000,    // 40%
      education: 750,     // 30%
      infrastructure: 500, // 20%
      emergency: 250      // 10%
    }
  },
  zakatRate: 0.025,
  timestamp: '2026-01-10T12:58:22.864Z'
}
```

##### `engageArchitects(project)`
Engages architects with AR visualization for a specific project.

**Parameters:**
- `project` (Object):
  - `id` (string, optional): Project identifier
  - `name` (string): Project name

**Returns:** Promise<Object>
```javascript
{
  engagement: {
    projectId: 'uuid',
    projectName: 'Project Name',
    architectsReached: 750,
    interactionRate: 0.75,
    renderQuality: '4K-HDR',
    geminiEnhancement: true
  },
  metrics: {
    totalReach: 750,
    activeUsers: 750,
    zakatContributions: 0
  },
  progress: {
    current: 750,
    target: 38000000,
    percentage: '0.00'
  },
  zakatIntegrated: true
}
```

##### `generateARVisualization(buildingSpecs)`
Generates AR visualization data for a building.

**Parameters:**
- `buildingSpecs` (Object): Building specifications
  - `name` (string): Building name
  - `floors` (number): Number of floors
  - `height` (number): Building height
  - `type` (string): Building type

**Returns:** Object
```javascript
{
  visualizationId: 'uuid',
  specs: { /* building specs */ },
  render: {
    resolution: '3840x2160',
    format: 'HDR10',
    layers: { structure, materials, lighting, environment, annotations },
    geminiEnhancements: { intelligentLighting, materialOptimization, ... }
  },
  interactivity: { rotation, zoom, layerToggle, measurements, annotations },
  timestamp: '2026-01-10T12:58:22.864Z'
}
```

##### `getMetrics()`
Returns current engagement statistics.

**Returns:** Object
```javascript
{
  totalReach: 2250,
  activeUsers: 2250,
  zakatContributions: 2500,
  targetAudience: 38000000,
  completion: '0.01%'
}
```

---

## Russell DCF Framework

### Overview
The Russell DCF Framework optimizes yield projection for Shinjuku Tower with Phi-Hedged IRR calculations and liquidity mechanism validation.

### Class: `RussellDCFFramework`

#### Constructor
```javascript
const russellDCF = new RussellDCFFramework(config);
```

**Parameters:**
- `config` (Object, optional):
  - `projectName` (string): Project name (default: 'Tokyo Expansion - Shinjuku Tower')
  - `location` (string): Project location (default: 'Shinjuku, Tokyo')
  - `phiRatio` (number): Golden ratio (default: 1.618033988749895)
  - `discountRate` (number): Discount rate (default: 0.08)

#### Methods

##### `calculateYieldProjection(projectionParams)`
Calculates yield projection for Shinjuku Tower.

**Parameters:**
- `projectionParams` (Object):
  - `initialInvestment` (number): Initial investment amount (default: 50000000)
  - `years` (number): Projection period in years (default: 10)
  - `growthRate` (number): Annual growth rate (default: 0.12)
  - `occupancyRate` (number): Occupancy rate (default: 0.92)

**Returns:** Object
```javascript
{
  projectName: 'Tokyo Expansion - Shinjuku Tower',
  initialInvestment: 50000000,
  projectionPeriod: 10,
  yearlyProjections: [
    {
      year: 1,
      baseYield: 56000000,
      adjustedYield: 51520000,
      phiAdjustedYield: 51907824.38,
      cumulativeYield: 51907824.38,
      occupancyRate: 0.92
    },
    // ... more years
  ],
  totalProjectedYield: 1234567890,
  averageAnnualYield: 123456789,
  timestamp: '2026-01-10T12:58:22.864Z'
}
```

##### `calculatePhiHedgedIRR(initialInvestment)`
Calculates Phi-Hedged Internal Rate of Return using golden ratio for risk adjustment.

**Parameters:**
- `initialInvestment` (number): Initial investment amount

**Returns:** Object
```javascript
{
  baseIRR: '14.87%',
  phiHedgedIRR: '15.73%',
  phiRatio: 1.618033988749895,
  hedgeFactor: 0.6180339887498949,
  riskMetrics: {
    sharpeRatio: '1.05',
    sortinoRatio: '1.57',
    volatility: '15%',
    downsideDeviation: '10%'
  },
  recommendation: 'Strong Buy',
  timestamp: '2026-01-10T12:58:22.864Z'
}
```

**Note:** Must call `calculateYieldProjection()` first to generate cash flows.

##### `validateLiquidityMechanisms(liquidityParams)`
Validates liquidity mechanisms for operations and exits.

**Parameters:**
- `liquidityParams` (Object):
  - `totalAssetValue` (number): Total asset value (default: 100000000)
  - `currentLiquidity` (number): Current liquidity (default: 15000000)
  - `requiredLiquidityRatio` (number): Required ratio (default: 0.20)
  - `emergencyReserveRatio` (number): Emergency reserve ratio (default: 0.05)

**Returns:** Object
```javascript
{
  totalAssetValue: 100000000,
  currentLiquidity: 25000000,
  requiredLiquidity: 20000000,
  emergencyReserve: 5000000,
  actualLiquidityRatio: '25.00%',
  phiLiquidityScore: '0.4045',
  validations: {
    sufficientLiquidity: true,
    emergencyReserveMet: true,
    optimalRatio: true,
    phiAligned: true
  },
  status: 'VALIDATED',
  recommendations: ['All liquidity mechanisms validated - maintain current strategy'],
  timestamp: '2026-01-10T12:58:22.864Z'
}
```

##### `generateComprehensiveDCF(params)`
Generates comprehensive DCF analysis combining all components.

**Parameters:**
- `params` (Object):
  - `projection` (Object): Yield projection parameters
  - `liquidity` (Object): Liquidity validation parameters

**Returns:** Object
```javascript
{
  projectName: 'Tokyo Expansion - Shinjuku Tower',
  location: 'Shinjuku, Tokyo',
  analysis: {
    yieldProjection: { /* yield projection results */ },
    irrAnalysis: { /* IRR analysis results */ },
    liquidityValidation: { /* liquidity validation results */ },
    npv: {
      value: 123456789,
      formatted: '$123.46M',
      discountRate: '8%',
      status: 'POSITIVE'
    }
  },
  overallAssessment: {
    investmentViability: 'VIABLE',
    riskLevel: 'LOW',
    phiAlignment: 'OPTIMIZED'
  },
  timestamp: '2026-01-10T12:58:22.864Z'
}
```

##### `getState()`
Returns current framework state.

**Returns:** Object
```javascript
{
  config: {
    projectName: 'Tokyo Expansion - Shinjuku Tower',
    location: 'Shinjuku, Tokyo',
    phiRatio: 1.618033988749895,
    discountRate: 0.08
  },
  cashFlowCount: 10,
  liquidityPool: 25000000,
  timestamp: '2026-01-10T12:58:22.864Z'
}
```

---

## Usage Examples

### Basic Harlem 4K AR Render Usage
```javascript
import Harlem4KARRender from './harlem4k-ar-render.js';

const harlemAR = new Harlem4KARRender();

// Initialize renderer
await harlemAR.initializeGeminiRenderer();

// Engage architects
const result = await harlemAR.engageArchitects({
  name: 'Cultural Center Project'
});

// Calculate Zakat
const zakat = harlemAR.calculateZakatFlow(100000);

// Get metrics
const metrics = harlemAR.getMetrics();
```

### Basic Russell DCF Framework Usage
```javascript
import RussellDCFFramework from './russell-dcf-framework.js';

const russellDCF = new RussellDCFFramework();

// Generate comprehensive analysis
const analysis = russellDCF.generateComprehensiveDCF({
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

console.log(analysis.overallAssessment);
```

---

## Key Concepts

### Zakat Flow Logic
- **Zakat Rate:** 2.5% of transaction amount
- **Distribution:**
  - 40% Community development
  - 30% Education initiatives
  - 20% Infrastructure projects
  - 10% Emergency relief

### Phi-Hedged IRR
- Uses golden ratio (φ = 1.618...) for risk adjustment
- Applies inverse golden ratio (1/φ ≈ 0.618) as hedge factor
- Provides more conservative, risk-adjusted return estimates

### Liquidity Validation
- **Minimum Requirements:** 20% of total asset value
- **Emergency Reserve:** 5% of total asset value
- **Optimal Range:** 20-35% liquidity ratio
- **Phi Alignment:** Liquidity score aligned with golden ratio principles

---

## Scalability Features

### Harlem 4K AR Render
- Modular architecture for easy extension
- Cloud-sync capabilities for distributed rendering
- Support for multiple concurrent projects
- Scalable engagement tracking up to 38M users

### Russell DCF Framework
- Configurable projection periods
- Support for multiple asset valuations
- Extensible cash flow modeling
- Reusable across different projects

---

## Best Practices

1. **Always initialize renderers** before engaging architects
2. **Run yield projections** before calculating IRR
3. **Validate liquidity** regularly for operational safety
4. **Monitor engagement metrics** to track progress toward 38M target
5. **Review Zakat distributions** to ensure ethical compliance
6. **Use Phi-hedged calculations** for conservative financial planning
