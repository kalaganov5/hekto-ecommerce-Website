import {sliderHeader} from './slider-header.js';
import {sliderFeatures} from './slider-features.js';
import {tabsToggle} from './tabs-toggle.js';
import {sliderPopularProducts} from './slider-products-popular.js';

sliderHeader;
sliderFeatures;
sliderPopularProducts;
// latest slider
tabsToggle('tabs-products', 'content-latest-products');
// discount slider
tabsToggle('tabs-discount', 'discount-products');
